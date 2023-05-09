var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_node3 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-J76I633P.css";

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
prisma = new import_client.PrismaClient();

// app/models/user.server.ts
var import_supabase_js = require("@supabase/supabase-js"), supabaseUrl = process.env.SUPABASE_URL_RAW, supabaseKey = process.env.SUPABASE_ANON_KEY, supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: !1,
    persistSession: !1
  }
}), adminAuthClient = supabase.auth.admin;
async function getUserById(id) {
  return console.log("id:", id), await prisma.user.findUnique({ where: { id } }) || [];
}
async function getUserByEmail(email) {
  return console.log("email:", email), await prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10), { data: data2, error } = await supabase.auth.admin.createUser({
    email,
    password: hashedPassword,
    user_metadata: { name: "Yoda" }
  }), user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
  console.log("user.id:", user.id);
  let { data2: data22, error2 } = await supabase.storage.from("files").upload(user.id + "/.initial", "", {
    cacheControl: "3600",
    upsert: !1
  });
  return console.log("data2:", data22), user;
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !0
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  }
];
async function loader({ request }) {
  return (0, import_node3.json)({
    user: await getUser(request)
  });
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: "h-full bg-dark", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/api.$userid.note.$noteid.show.tsx
var api_userid_note_noteid_show_exports = {};
__export(api_userid_note_noteid_show_exports, {
  loader: () => loader2
});
var import_client2 = require("@prisma/client"), import_server_runtime = require("@remix-run/server-runtime"), prisma2 = new import_client2.PrismaClient(), loader2 = async ({ request, params }) => {
  if (console.log("field:", params.id), params.noteid == "all") {
    let notes = await prisma2.note.findMany({ where: { userId: params.userid } });
    return console.log("notes:", notes), console.log("Loading..."), await prisma2.$disconnect(), (0, import_server_runtime.json)(notes, 200);
  } else {
    let notes = await prisma2.note.findMany({ where: { userId: params.userid, id: params.noteid } });
    return console.log("notes:", notes), console.log("Loading..."), await prisma2.$disconnect(), (0, import_server_runtime.json)(notes, 200);
  }
};

// app/routes/notes.edit.$noteId.tsx
var notes_edit_noteId_exports = {};
__export(notes_edit_noteId_exports, {
  action: () => action,
  default: () => EditNotePage,
  loader: () => loader3,
  supabase: () => supabase2
});
var import_node4 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), React = __toESM(require("react")), import_react_router_dom = require("react-router-dom");

// app/models/note.server.ts
var fs = require("fs");
function getNote({
  id,
  userId
}) {
  return prisma.note.findFirst({
    select: { id: !0, body: !0, img: !0, title: !0, tags: !0 },
    where: { id, userId }
  });
}
async function getNoteListItems({ userId }) {
  return console.log("userId", userId), await prisma.note.findMany({
    where: { userId },
    select: { id: !0, title: !0 },
    orderBy: [{ updatedAt: "desc" }]
  });
}
function updateNote(obj) {
  return prisma.note.update({
    where: {
      id: obj.id
    },
    data: obj
  });
}
function adicionaZero(numero) {
  return numero <= 9 ? "0" + numero : numero;
}
var dataAtual = new Date(), dataAtualFormatada = adicionaZero(dataAtual.getDate().toString()) + adicionaZero(dataAtual.getMonth() + 1).toString() + dataAtual.getFullYear();
console.log(dataAtualFormatada);
function folderCreate({ folderName, userId }) {
  return console.log(folderName), prisma.folder.create({
    data: {
      name: folderName,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function createNote({
  body,
  title,
  tags,
  img,
  userId
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      tags,
      img,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({
  id,
  userId
}) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// app/routes/notes.edit.$noteId.tsx
var import_react4 = require("react"), import_supabase_js2 = require("@supabase/supabase-js"), import_uuid = require("uuid"), import_jsx_runtime3 = require("react/jsx-runtime"), supabase2 = (0, import_supabase_js2.createClient)("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
async function loader3({ request, params }) {
  let userId = await requireUserId(request), note = await getNote({ userId, id: params.noteId }) || {};
  if (console.log(11, note), !note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node4.json)({ note });
}
async function action({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), id = formData.get("id"), title = formData.get("title"), tags = formData.get("tags"), body = formData.get("body"), image = formData.get("image"), noimage = formData.get("noimage");
  if (console.log(title, body, image, noimage), typeof title != "string" || title.length === 0)
    return (0, import_node4.json)(
      { errors: { title: "Title is required", body: null } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node4.json)(
      { errors: { title: null, body: "Body is required" } },
      { status: 400 }
    );
  let obj = { id, title, body, tags, userId };
  obj.img = image, console.log(2, noimage), noimage == "true" && (obj.img = "");
  let note = await updateNote(obj);
  return (0, import_node4.redirect)(`/notes/${note.id}`);
}
function EditNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let data2 = (0, import_react3.useLoaderData)(), actionData = (0, import_react3.useActionData)(), idRef = React.useRef(null), titleRef = React.useRef(null), tagsRef = React.useRef(null), bodyRef = React.useRef(null), imageRef = React.useRef(null), noimageRef = React.useRef("false"), [file, setfile] = (0, import_react4.useState)([]), [db_fileName, db_setFileName] = (0, import_react4.useState)([]), submit = (0, import_react_router_dom.useSubmit)();
  React.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]);
  let handleFileSelected = (e) => {
    setfile(e.target.files[0]);
  }, handleSubmit = async (e) => {
    e.preventDefault(), console.log(file.length);
    let formData = new FormData();
    if (formData.set("id", idRef.current.value), formData.set("title", titleRef.current.value), formData.set("tags", tagsRef.current.value), formData.set("body", bodyRef.current.value), formData.set("noimage", noimageRef.current.checked), file.length !== 0) {
      let filename = `${(0, import_uuid.v4)()}-${file.name}`, { data: data3, error } = await supabase2.storage.from("files").upload(filename, file, {
        cacheControl: "3600",
        upsert: !1
      }), filepath = data3.path;
      formData.set("image", filepath);
    }
    console.log(noimageRef.current.checked), noimageRef.current.checked && formData.set("image", ""), submit(
      formData,
      { method: "post" }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_react_router_dom.Form,
    {
      name: "form1",
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "flex w-full flex-col gap-1 text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                ref: idRef,
                hidden: !0,
                name: "id",
                defaultValue: data2.note.id,
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Titulo: " }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                ref: titleRef,
                id: "title",
                name: "title",
                defaultValue: data2.note.title,
                className: " text-gray-50 bg-slate-700 border-slate-800 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
                "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
              }
            )
          ] }),
          ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "flex w-full flex-col gap-1 text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Nota: " }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "textarea",
              {
                ref: bodyRef,
                name: "body",
                defaultValue: data2.note.body,
                rows: 8,
                className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
                "aria-invalid": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.body ? !0 : void 0,
                "aria-errormessage": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.body ? "body-error" : void 0
              }
            )
          ] }),
          ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.body) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "flex w-full flex-col gap-1 text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Tags: " }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "input",
            {
              ref: tagsRef,
              name: "tags",
              defaultValue: data2.note.tags,
              className: " text-gray-50 bg-slate-700 border-slate-800 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "flex w-full flex-col gap-1 text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Img: " }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "input",
            {
              ref: imageRef,
              name: "image",
              defaultValue: data2.note.img,
              className: " text-gray-50 bg-slate-700 border-slate-800 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Save"
          }
        ) })
      ]
    }
  );
}

// app/routes/notes.$noteId.tsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action2,
  default: () => NoteDetailsPage,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_react6 = require("@remix-run/react"), import_jsx_runtime4 = require("react/jsx-runtime");
async function loader4({ request, params }) {
  let env = {
    SUPABASE_URL_RAW: process.env.SUPABASE_URL_RAW,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  }, userId = await requireUserId(request);
  (0, import_tiny_invariant2.default)(params.noteId, "noteId not found");
  let note = await getNote({ userId, id: params.noteId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return note.userid = userId, console.log(note), (0, import_node5.json)({ userId, note, env });
}
async function action2({ request, params }) {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant2.default)(params.noteId, "noteId not found"), await deleteNote({ userId, id: params.noteId }), (0, import_node5.redirect)("/notes");
}
function NoteDetailsPage() {
  let data2 = (0, import_react5.useLoaderData)(), CDNURL = "", navigate = (0, import_react6.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-dark text-slate-50", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "text-2xl font-bold", children: data2.note.title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { dangerouslySetInnerHTML: { __html: data2.note.body.replace(/\n/g, "<br />") } }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "py-6", children: data2.note.img && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: `${data2.note.img}`, alt: "dd", style: { width: "100px" } }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react5.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "button",
        {
          type: "button",
          onClick: () => navigate("/notes/edit/" + data2.note.id),
          className: "rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600 focus:bg-blue-400",
          children: "Edit"
        }
      ),
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "button",
        {
          type: "submit",
          className: "rounded bg-red-500  px-4 py-1 text-white hover:bg-red-800 focus:bg-blue-400",
          children: "Delete"
        }
      )
    ] })
  ] });
}
function ErrorBoundary() {
  let error = (0, import_react5.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }) : (0, import_react5.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: "Note not found" }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { children: "Unknown Error" });
}

// app/routes/imagemanager.tsx
var imagemanager_exports = {};
__export(imagemanager_exports, {
  default: () => imagemanager,
  loader: () => loader5
});
var import_react7 = require("react"), import_react_bootstrap = require("react-bootstrap"), import_Button2 = __toESM(require("react-bootstrap/Button")), import_supabase_js3 = require("@supabase/supabase-js"), import_node6 = require("@remix-run/node"), import_react8 = __toESM(require("react")), import_uuid2 = require("uuid"), import_server_runtime2 = require("@remix-run/server-runtime");

// app/components/modal.tsx
var import_Button = __toESM(require("react-bootstrap/Button")), import_Modal = __toESM(require("react-bootstrap/Modal")), import_jsx_runtime5 = require("react/jsx-runtime");
function Example({ title, children, show, setShow, showFooterButtons }) {
  let handleClose = () => setShow(!1), handleShow = () => setShow(!0);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_Modal.default, { show, onHide: handleClose, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_Modal.default.Header, { closeButton: !0, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_Modal.default.Title, { children: title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_Modal.default.Body, { children }),
    showFooterButtons && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_Modal.default.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_Button.default, { variant: "secondary", onClick: handleClose, children: "Close" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_Button.default, { variant: "primary", onClick: handleClose, children: "Save Changes" })
    ] })
  ] }) });
}
var modal_default = Example;

// app/routes/imagemanager.tsx
var import_react9 = require("@remix-run/react"), import_tfi = require("react-icons/tfi"), import_jsx_runtime6 = require("react/jsx-runtime"), loader5 = async ({ request }) => {
  let userId = await getUserId(request), CDNURL = process.env.SUPABASE_URL_RAW, env = {
    SUPABASE_URL_RAW: process.env.SUPABASE_URL_RAW,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  };
  return userId ? (0, import_node6.json)({ userId, env, CDNURL }) : (0, import_server_runtime2.redirect)("/login");
};
function imagemanager() {
  var _a;
  let data2 = (0, import_react9.useLoaderData)(), [url, setUrl] = (0, import_react7.useState)(""), urlRef = import_react8.default.useRef(null), formUploadRef = import_react8.default.useRef(null), fileNewNameRef = import_react8.default.useRef(null), [filesData, setFilesData] = (0, import_react7.useState)([]), [file, setfile] = (0, import_react7.useState)([]), [user, setUser] = (0, import_react7.useState)(data2.userId), [urlType, setUrlType] = (0, import_react7.useState)(""), newFolderRef = import_react8.default.useRef(null), uploadTxtRef = import_react8.default.useRef(null), [show, setShow] = (0, import_react7.useState)(!1), [showRenomear, setShowRenomear] = (0, import_react7.useState)(!1), [fileCopyAction, setFileCopyAction] = (0, import_react7.useState)(""), [folderCopyAction, setFolderCopyAction] = (0, import_react7.useState)(""), [selectFile, setSelectFile] = (0, import_react7.useState)(""), bucket = "files", CDNURL = data2.env.SUPABASE_URL_RAW + "/storage/v1/object/public/files", supabase6 = (0, import_supabase_js3.createClient)(data2.env.SUPABASE_URL_RAW, data2.env.SUPABASE_ANON_KEY, {
    db: {
      schema: "custom"
    },
    auth: {
      persistSession: !0
    }
  });
  (0, import_react7.useEffect)(() => {
    list_files("", "");
  }, []), (0, import_react7.useEffect)(() => {
    console.log(url), urlRef.current.value = url;
  }, [url]);
  let handleFileSelected = (e) => {
    setfile(e.target.files[0]), console.log("!");
  }, list_files = async (url_, folder) => {
    setUrl(""), console.log(user, url_, folder), setFilesData([]);
    let target;
    url_ == "" && folder == "" && (target = user), url_ == "" && folder !== "" && (setUrl(folder), target = user + "/" + folder), url_ !== "" && folder !== "" && (setUrl(url_ + "/" + folder), target = user + "/" + url_ + "/" + folder), console.log("target:", target);
    let { data: data3, error } = await supabase6.storage.from(bucket).list(target, {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" }
    });
    console.log(data3), setFilesData(data3);
  }, handleSubmit = async (e) => {
    e.preventDefault();
    let filename = `${(0, import_uuid2.v4)()}-${file.name}`, { data: data3, error } = await supabase6.storage.from(bucket).upload(user + "/" + url + "/" + filename, file, {
      cacheControl: "3600",
      upsert: !1
    });
    list_files("", url), setShow(!1);
  }, handleSubmit_rename = async (e) => {
    var _a2;
    e.preventDefault();
    let a = url.split("/");
    a.pop();
    let b = a.join("/"), bb = url, cc = b + "/" + ((_a2 = fileNewNameRef.current) == null ? void 0 : _a2.value);
    console.log("rename:", bb, cc), console.log(user + "/" + bb, user + "/" + cc);
    let origem = bb[0] == "/" ? user + bb : user + "/" + bb, destino = cc[0] == "/" ? user + cc : user + "/" + cc, { data: data3, error } = await supabase6.storage.from(bucket).move(origem, destino);
    console.log(error), setShowRenomear(!1), setUrl(cc);
  }, newFolder = async (name) => {
    let { data: data3, error } = await supabase6.storage.from(bucket).upload(user + "/" + url + "/" + name + "/.initial", "", {
      cacheControl: "3600",
      upsert: !1
    });
    list_files("", url);
  }, deleteFolder = async () => {
    if (console.log("::", user + url + "/*"), confirm("Confirma exclus\xE3o da pasta:" + url)) {
      let { data: data3, error } = await supabase6.storage.from(bucket).remove([user + "/" + url + "/.initial"]);
      console.log(data3, error), error ? alert(error) : back();
    }
  }, deleteImage = async (imageName) => {
    if (console.log(imageName), confirm("Confirma exclus\xE3o do arquivo:" + imageName)) {
      let { data: data3, error } = await supabase6.storage.from(bucket).remove([user + url]);
      console.log(data3, error), error ? alert(error) : back();
    }
  }, copy = async () => {
    await navigator.clipboard.writeText(url), alert("Text copied");
  }, handleClick = (event) => {
    event.detail === 2 && console.log("double click");
  }, goUrl = async () => {
    urlRef.current.value = "", setUrl(urlRef.current.value);
  }, goHome = async () => {
    urlRef.current.value = "", setUrlType("folder"), list_files("", "");
  }, back = async () => {
    let b = url.split("/").slice(0, -1).join("/");
    list_files("", b), setUrlType("folder");
  }, goNewFolder = () => {
    let a = prompt("Nome da pasta");
    newFolder(a);
  }, goDelete = () => {
    deleteImage(url);
  }, goUpload = () => {
    setShow(!0), console.log(show);
  }, folderCopyDo = async () => {
    console.log("folderCopyDo:", user + "/" + folderCopyAction, user + "/" + url);
    let { data: data3, error } = await supabase6.storage.from(bucket).copy(user + "/" + folderCopyAction, user + "/" + url);
    console.log(error), setFolderCopyAction(""), list_files("", url);
  }, fileCopyDo = async () => {
    let fileName = fileCopyAction.split("/").pop();
    console.log("fileCopyDo:", user + fileCopyAction, user + "/" + url + "/" + fileName);
    let { data: data3, error } = await supabase6.storage.from(bucket).copy(user + fileCopyAction, user + "/" + url + "/" + fileName);
    console.log(error), setFileCopyAction(""), list_files("", url);
  }, movePaste = async () => {
    let fileName = selectFile.split("/").pop();
    console.log(user + selectFile, user + url + "/" + fileName);
    let { data: data3, error } = await supabase6.storage.from(bucket).move(user + selectFile, user + "/" + url + "/" + fileName);
    console.log(error), setSelectFile(""), list_files("", url);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: " text-white pt-10 pb-2 text-center", style: { width: "80%", margin: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: "Gerenciador de arquivos" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(modal_default, { title: "Renomear arquivo", show: showRenomear, setShow: setShowRenomear, showFooterButtons: !1, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_react_bootstrap.Form,
      {
        name: "form_rename",
        method: "post",
        onSubmit: handleSubmit_rename,
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "100%"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_bootstrap.Form.Group, { className: "mb-3", controlId: "formBasicEmail", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Form.Label, { children: "Digite o novo nome" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Form.Control, { type: "text", ref: fileNewNameRef, defaultValue: url.split("/").pop(), name: "fileNewName" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "button",
            {
              type: "submit",
              className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
              children: "Renomear arquivo"
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(modal_default, { title: "Enviar arquivo", show, setShow, showFooterButtons: !1, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_react_bootstrap.Form,
      {
        ref: formUploadRef,
        name: "form1",
        method: "post",
        onSubmit: handleSubmit,
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "100%"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Form.Group, { controlId: "formFileSm", className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Form.Control, { type: "file", size: "sm", name: "image", onChange: (event) => handleFileSelected(event), accept: "image" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "button",
            {
              type: "submit",
              className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
              children: "Enviar arquivo"
            }
          )
        ] })
      }
    ) }),
    (_a = uploadTxtRef.current) == null ? void 0 : _a.value,
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { width: "80%", margin: "auto", marginTop: "10px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_bootstrap.InputGroup, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.InputGroup.Text, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_Button2.default, { variant: "primary", onClick: () => goHome(), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_tfi.TfiHome, {}) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.InputGroup.Text, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_Button2.default, { variant: "primary", onClick: () => back(), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_tfi.TfiArrowCircleLeft, {}) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_react_bootstrap.Form.Control,
          {
            name: "url",
            ref: urlRef,
            defaultValue: url
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.InputGroup.Text, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_Button2.default, { variant: "primary", onClick: () => goUrl(), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_tfi.TfiArrowCircleRight, {}) }) }),
        urlType == "img" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.InputGroup.Text, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_Button2.default, { variant: "primary", onClick: () => navigator.clipboard.writeText(data2.env.SUPABASE_URL_RAW + "/storage/v1/object/public/files/" + user + "/" + urlRef.current.value), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_tfi.TfiClipboard, {}) }) }),
        (urlType == "folder" || url == "" || url == "/") && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          import_react_bootstrap.DropdownButton,
          {
            as: import_react_bootstrap.ButtonGroup,
            title: "Comandos",
            id: "bg-vertical-dropdown-1",
            children: [
              urlType == "folder" && fileCopyAction && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Dropdown.Item, { eventKey: "3", onClick: () => fileCopyDo(), children: "Colar" }),
              urlType == "folder" && selectFile && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Dropdown.Item, { eventKey: "3", onClick: () => movePaste(), children: "Colar" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Dropdown.Item, { eventKey: "1", onClick: () => goNewFolder(), children: "Nova pasta" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Dropdown.Item, { eventKey: "2", onClick: () => goUpload(), children: "Enviar arquivo" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Dropdown.Item, { eventKey: "3", onClick: () => deleteFolder(), children: "Excluir pasta" })
            ]
          }
        ),
        urlType == "img" && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          import_react_bootstrap.DropdownButton,
          {
            as: import_react_bootstrap.ButtonGroup,
            title: "Comandos",
            id: "bg-vertical-dropdown-1",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Dropdown.Item, { eventKey: "4", onClick: () => setShowRenomear(!0), children: "Renomear arquivo" }),
              !fileCopyAction && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Dropdown.Item, { eventKey: "5", onClick: () => setFileCopyAction(url), children: "Copiar arquivo" }),
              !selectFile && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Dropdown.Item, { eventKey: "6", onClick: () => setSelectFile(url), children: "Cortar arquivo" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Dropdown.Item, { eventKey: "6", onClick: () => goDelete(), children: "Excluir arquivo" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Row, { xs: 1, md: 4, className: "g-4", children: urlType !== "img" && filesData.filter((x) => !x.name.includes("undefined") && x.name !== ".initial").map((image) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Col, { children: image.id ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Card.Img, { variant: "top", style: { width: "50vw", height: "38vh", objectFit: "cover" }, src: CDNURL + "/" + user + "/" + url + "/" + image.name, onClick: () => {
        setUrlType("img"), setUrl(url + "/" + image.name);
      } }) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Card, { style: { backgroundColor: "#19376D" }, onClick: () => {
        setUrlType("folder"), list_files(url, image.name);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_bootstrap.Card.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: "/img/folder2.png", alt: "" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.InputGroup, { className: "mb-3 pl-2", style: { color: "white" }, children: image.name })
      ] }) }) }, CDNURL + "/" + image.name)) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: urlType == "img" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-100 d-flex justify-content-center mt-2 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: CDNURL + "/" + user + "/" + url }) }) }) })
    ] })
  ] });
}

// app/routes/notes._index.tsx
var notes_index_exports = {};
__export(notes_index_exports, {
  default: () => NoteIndexPage
});
var import_react10 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
    "Selecione uma nota, ou",
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react10.Link, { to: "new", className: "text-blue-500 underline", children: "crie uma nova." })
  ] });
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader6
});
async function loader6({ request }) {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
}

// app/routes/folderNew.tsx
var folderNew_exports = {};
__export(folderNew_exports, {
  action: () => action3,
  default: () => NewNotePage,
  supabase: () => supabase3
});
var import_node7 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), React3 = __toESM(require("react"));
var import_supabase_js4 = require("@supabase/supabase-js");
var import_jsx_runtime8 = require("react/jsx-runtime");
var supabase3 = (0, import_supabase_js4.createClient)("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
async function action3({ request }) {
  let userId = await requireUserId(request), folderName = (await request.formData()).get("folderName");
  console.log("folderName:", folderName);
  let ret = await folderCreate({ folderName, userId });
  return console.log("ret:", ret), (0, import_node7.redirect)("/notes");
}
function NewNotePage() {
  let folderNameRef = React3.useRef(null), folderNew = async () => {
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }, response = await fetch("url", config);
      if (response.ok)
        return response;
    } catch {
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "p-10", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    import_react11.Form,
    {
      name: "form1",
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-gray-50", children: "Nova pasta" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Nome: " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              "input",
              {
                autoFocus: !0,
                ref: folderNameRef,
                id: "folderName",
                name: "folderName",
                className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "text-left mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "button",
            {
              type: "submit",
              className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
              children: "Salvar"
            }
          ),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react11.Link, { to: "/notes", children: "Cencelar" })
        ] })
      ]
    }
  ) });
}

// app/routes/notes.new.tsx
var notes_new_exports = {};
__export(notes_new_exports, {
  action: () => action4,
  default: () => NewNotePage2,
  loader: () => loader7,
  supabase: () => supabase4
});
var import_node8 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), React4 = __toESM(require("react")), import_react_router_dom2 = require("react-router-dom");
var import_react13 = require("react"), import_supabase_js5 = require("@supabase/supabase-js");
var import_jsx_runtime9 = require("react/jsx-runtime");
var supabase4 = (0, import_supabase_js5.createClient)("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
async function loader7({ request, params }) {
  let env = {
    SUPABASE_URL_RAW: process.env.SUPABASE_URL_RAW,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  }, userId = await requireUserId(request);
  return (0, import_node8.json)({ env });
}
async function action4({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body"), tags = formData.get("tags"), image = formData.get("image");
  if (console.log(title, body, image), typeof title != "string" || title.length === 0)
    return (0, import_node8.json)(
      { errors: { title: "Title is required", body: null } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node8.json)(
      { errors: { title: null, body: "Body is required" } },
      { status: 400 }
    );
  let note = await createNote({ title, body, img: image, tags, userId });
  return (0, import_node8.redirect)(`/notes/${note.id}`);
}
function NewNotePage2() {
  var _a, _b, _c, _d, _e, _f;
  let data2 = (0, import_react12.useLoaderData)(), actionData = (0, import_react12.useActionData)(), titleRef = React4.useRef(null), bodyRef = React4.useRef(null), tagsRef = React4.useRef(null), imageRef = React4.useRef(null), [file, setfile] = (0, import_react13.useState)([]), [filesData, setFilesData] = (0, import_react13.useState)([]), [db_fileName, db_setFileName] = (0, import_react13.useState)([]), submit = (0, import_react_router_dom2.useSubmit)();
  React4.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]);
  let folderNew = async () => {
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data2)
      }, response = await fetch("url", config);
      if (response.ok)
        return response;
    } catch {
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    import_react_router_dom2.Form,
    {
      name: "form1",
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { htmlFor: "title", className: "flex w-full flex-col gap-1  text-gray-50", children: [
          "Titulo:",
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "input",
            {
              autoFocus: !0,
              ref: titleRef,
              id: "title",
              name: "title",
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
              "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
              "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "Texto: " }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "textarea",
            {
              ref: bodyRef,
              name: "body",
              rows: 8,
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
              "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.body ? !0 : void 0,
              "aria-errormessage": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.body ? "body-error" : void 0
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { htmlFor: "tags", className: "flex w-full flex-col gap-1  text-gray-50", children: [
          "Marcadores:",
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "input",
            {
              autoFocus: !0,
              ref: tagsRef,
              id: "tags",
              name: "tags",
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
              "aria-invalid": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.title ? !0 : void 0,
              "aria-errormessage": (_f = actionData == null ? void 0 : actionData.errors) != null && _f.title ? "title-error" : void 0
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "Imagem: " }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "input",
            {
              ref: imageRef,
              name: "image",
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-left mt-3", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Salvar"
          }
        ) })
      ]
    }
  ) });
}

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  action: () => action5,
  default: () => Project,
  loader: () => loader8
});
var import_node9 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), React5 = __toESM(require("react"));

// app/models/project.server.ts
async function getProjectList({ userId }) {
  return console.log("userId", userId), await prisma.project.findMany({
    where: { userId },
    select: { id: !0, name: !0 },
    orderBy: { updatedAt: "desc" }
  });
}
function adicionaZero2(numero) {
  return numero <= 9 ? "0" + numero : numero;
}
var dataAtual2 = new Date(), dataAtualFormatada2 = adicionaZero2(dataAtual2.getDate().toString()) + adicionaZero2(dataAtual2.getMonth() + 1).toString() + dataAtual2.getFullYear();
console.log(dataAtualFormatada2);

// app/routes/projects.tsx
var import_react15 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
async function loader8({ request, params }) {
  let userId = await requireUserId(request);
  console.log("userId:", userId);
  let data2 = getProjectList({ userId });
  return console.log("data:", data2), (0, import_node9.json)({ userId, data: data2 });
}
async function action5({ request }) {
  let userId = await requireUserId(request), name = (await request.formData()).get("name");
  return console.log("name:", name), (0, import_node9.redirect)("/notes");
}
function Project() {
  let data2 = (0, import_react14.useLoaderData)(), [projects, setProjects] = (0, import_react15.useState)(data2), nameRef = React5.useRef(null);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "p-10", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    import_react14.Form,
    {
      name: "form1",
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: projects }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-gray-50", children: "Nova pasta" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "Nome: " }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "input",
              {
                autoFocus: !0,
                ref: nameRef,
                id: "name",
                name: "name",
                className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "text-left mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "button",
            {
              type: "submit",
              className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
              children: "Salvar"
            }
          ),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react14.Link, { to: "/notes", children: "Cencelar" })
        ] })
      ]
    }
  ) });
}

// app/routes/showRes.tsx
var showRes_exports = {};
__export(showRes_exports, {
  loader: () => loader9
});
var import_node10 = require("@remix-run/node"), import_supabase_js6 = require("@supabase/supabase-js"), loader9 = async ({ request }) => {
  let url = new URL(request.url), field = url.searchParams.get("field") || "", value = url.searchParams.get("value");
  console.log(field, value);
  let env = {
    SUPABASE_URL_RAW: process.env.SUPABASE_URL_RAW,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  }, supabase6 = (0, import_supabase_js6.createClient)(env.SUPABASE_URL_RAW, env.SUPABASE_ANON_KEY);
  if ((field == null ? void 0 : field.length) > 0) {
    let { data: data2, error } = await supabase6.from("Note").select();
    return console.log("data:", data2), (0, import_node10.json)(data2, 200);
  } else {
    console.log("!!!!!!!!!!!!!!");
    let { data: data2, error } = await supabase6.from("Note").select("id");
    return console.log("data:", data2), console.log("error:", error), (0, import_node10.json)(data2, 200);
  }
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_react18 = require("@remix-run/react");

// app/utils.ts
var import_react16 = require("@remix-run/react"), import_react17 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react16.useMatches)(), route = (0, import_react17.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
}
function useOptionalUser() {
  let data2 = useMatchesData("root");
  if (!(!data2 || !isUser(data2.user)))
    return data2.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/_index.tsx
var import_jsx_runtime11 = require("react/jsx-runtime"), meta = () => [{ title: "Remix Notes" }];
function Index() {
  let user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("main", { className: "bg-dark relative min-h-screen sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "relative sm:pb-16 sm:pt-8", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "absolute inset-0" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "relative px-4 pb-8 pt-5 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-15", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-4xl", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "block uppercase text-yellow-500 drop-shadow-md", children: "MW Notes2" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        import_react18.Link,
        {
          to: "/notes",
          className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
          children: [
            "Notas de ",
            user.email
          ]
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          import_react18.Link,
          {
            to: "/join",
            className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
            children: "Inscrever"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          import_react18.Link,
          {
            to: "/login",
            className: "flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600",
            children: "Entrar"
          }
        )
      ] }) })
    ] })
  ] }) }) }) });
}

// app/routes/login2.tsx
var login2_exports = {};
__export(login2_exports, {
  loader: () => loader10
});
var import_node11 = require("@remix-run/node"), import_auth_helpers_remix = require("@supabase/auth-helpers-remix"), loader10 = async ({ request }) => {
  let response = new Response(), supabaseClient = (0, import_auth_helpers_remix.createServerClient)(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    { request, response }
  ), { data: data2 } = await supabaseClient.from("test").select("*");
  return (0, import_node11.json)(
    { data: data2 },
    {
      headers: response.headers
    }
  );
};

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action6,
  loader: () => loader11
});
var import_node12 = require("@remix-run/node");
async function action6({ request }) {
  return logout(request);
}
async function loader11() {
  return (0, import_node12.redirect)("/");
}

// app/routes/upload.tsx
var upload_exports = {};
__export(upload_exports, {
  default: () => Page,
  supabase: () => supabase5
});
var import_react19 = require("react"), import_supabase_js7 = require("@supabase/supabase-js"), import_uuid3 = require("uuid"), import_jsx_runtime12 = require("react/jsx-runtime"), supabase5 = (0, import_supabase_js7.createClient)("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
function Page() {
  let [file, setfile] = (0, import_react19.useState)([]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("form", { onSubmit: async (e) => {
    e.preventDefault();
    let filename = `${(0, import_uuid3.v4)()}-${file.name}`, { data: data2, error } = await supabase5.storage.from("files").upload(filename, file, {
      cacheControl: "3600",
      upsert: !1
    }), filepath = data2.path;
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "file", name: "image", onChange: (e) => {
      setfile(e.target.files[0]);
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "submit", children: "Upload image" })
  ] });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action7,
  default: () => LoginPage,
  loader: () => loader12,
  meta: () => meta2
});
var import_node13 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), React6 = __toESM(require("react"));
var import_jsx_runtime13 = require("react/jsx-runtime");
async function loader12({ request }) {
  let userId = await getUserId(request);
  return console.log("-->userId:", userId), (0, import_node13.json)({});
}
async function action7({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/notes"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node13.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node13.json)(
      { errors: { email: null, password: "Digite a senha" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    request,
    userId: user.id,
    remember: remember === "on",
    redirectTo
  }) : (0, import_node13.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}
var meta2 = () => [{ title: "Login" }];
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react20.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react20.useActionData)(), emailRef = React6.useRef(null), passwordRef = React6.useRef(null);
  return React6.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex mt-20 min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react20.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex w-full justify-center text-white", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { children: "Entrar" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-white",
          children: "Email"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-white",
          children: "Senha"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Entrar"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-100",
            children: "Lembrar"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "text-center text-sm text-gray-500", children: [
        "Ainda n\xE3o tem conta?",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_react20.Link,
          {
            className: "text-blue-500 underline",
            to: {
              pathname: "/join",
              search: searchParams.toString()
            },
            children: "Registrar"
          }
        )
      ] })
    ] })
  ] }) }) });
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader13
});
var import_node14 = require("@remix-run/node"), import_react21 = require("@remix-run/react");
var import_react_router_dom3 = require("react-router-dom"), import_react22 = require("react"), import_react_arborist = require("react-arborist"), import_jsx_runtime14 = require("react/jsx-runtime");
async function loader13({ request }) {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return console.log(4, noteListItems), (0, import_node14.json)(noteListItems);
}
function NotesPage() {
  let navigate = (0, import_react_router_dom3.useNavigate)(), data2 = (0, import_react21.useLoaderData)();
  console.log("data:", data2);
  let user = useUser(), [showSideBar, setShowSideBar] = (0, import_react22.useState)(!0), [dataTree, setDataTree] = (0, import_react22.useState)(data2);
  function Node({ node, style, dragHandle }) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style, ref: dragHandle, children: [
      node.isLeaf ? "" : "\u{1F5C0}",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("a", { className: "no-underline", href: "/notes/" + node.data.id, children: node.data.title })
    ] });
  }
  let data22 = [
    { id: "1", name: "Unread", link: "/notes" },
    { id: "2", name: "Threads" },
    {
      id: "3",
      name: "Chat Rooms",
      children: [
        { id: "c1", name: "General" },
        { id: "c2", name: "Random" },
        { id: "c3", name: "Open Source Projects" }
      ]
    },
    {
      id: "4",
      name: "Direct Messages",
      children: [
        { id: "d1", name: "Alice" },
        { id: "d2", name: "Bob" },
        { id: "d3", name: "Charlie" }
      ]
    }
  ];
  (0, import_react22.useEffect)(() => {
    setDataTree(data2);
    function handleResize() {
      window.innerWidth < 380 && setShowSideBar(!1);
    }
    window.addEventListener("resize", handleResize);
  });
  let handleToggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("header", { className: "flex pt-6 items-center justify-between bg-slate-800 p-2 text-white no-underline", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { onClick: () => {
        handleToggleSideBar();
      }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("svg", { className: "w-6 h-6", "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h5", { className: "text-1xl font-sans	pt-1 pl-2", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react21.Link, { to: ".", className: "no-underline text-yellow-500", children: "MW Notes" }) }),
      user.id,
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react21.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "button",
        {
          type: "submit",
          className: "rounded bg-slate-600 px-4 py-1 text-blue-100 hover:bg-blue-500 active:bg-blue-600 text-xs",
          children: user.email
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("main", { className: "flex h-full", children: [
      showSideBar && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("aside", { className: " pl-5 w-[150px] py-3 ", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("a", { href: "/notes/new", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("svg", { className: "h-6 w-6 text-gray-400", width: "24", height: "24", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
          "  ",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z" }),
          "  ",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }),
          "  ",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" }),
          "  ",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("line", { x1: "12", y1: "11", x2: "12", y2: "17" }),
          "  ",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("line", { x1: "9", y1: "14", x2: "15", y2: "14" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          import_react_arborist.Tree,
          {
            initialData: dataTree,
            openByDefault: !0,
            width: 150,
            height: 1e3,
            indent: 24,
            rowHeight: 25,
            overscanCount: 1,
            paddingTop: 20,
            paddingBottom: 5,
            padding: 10,
            children: Node
          }
        )
      ] }) }),
      !1,
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react21.Outlet, {}) })
    ] })
  ] });
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action8,
  default: () => Join,
  loader: () => loader14,
  meta: () => meta3
});
var import_node15 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), React7 = __toESM(require("react"));
var import_jsx_runtime15 = require("react/jsx-runtime");
async function loader14({ request }) {
  let userId = await getUserId(request);
  return (0, import_node15.json)({});
}
async function action8({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node15.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node15.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 5)
    return (0, import_node15.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node15.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    request,
    userId: user.id,
    remember: !1,
    redirectTo
  });
}
var meta3 = () => [{ title: "Sign Up" }];
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react23.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react23.useActionData)(), emailRef = React7.useRef(null), passwordRef = React7.useRef(null);
  return React7.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mx-auto pt-20 w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_react23.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex w-full justify-center text-white", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { children: "Registrar" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-white",
          children: "Email"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-white",
          children: "Senha"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "new-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Registrar"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-center text-sm text-gray-500", children: [
      "J\xE1 tem uma conta?",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_react23.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Entrar"
        }
      )
    ] }) })
  ] }) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "7ceaff07", entry: { module: "/build/entry.client-MRYRRJCT.js", imports: ["/build/_shared/chunk-U5ESLDBE.js", "/build/_shared/chunk-N25U7VOR.js", "/build/_shared/chunk-PQZYEQJJ.js", "/build/_shared/chunk-T36URGAI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RXZ2ZGDQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3U3Q2VEA.js", imports: ["/build/_shared/chunk-L27AEQYI.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.$userid.note.$noteid.show": { id: "routes/api.$userid.note.$noteid.show", parentId: "root", path: "api/:userid/note/:noteid/show", index: void 0, caseSensitive: void 0, module: "/build/routes/api.$userid.note.$noteid.show-EFCKSQVP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/folderNew": { id: "routes/folderNew", parentId: "root", path: "folderNew", index: void 0, caseSensitive: void 0, module: "/build/routes/folderNew-ODGLR54P.js", imports: ["/build/_shared/chunk-KZNWDO46.js", "/build/_shared/chunk-DYV54FQG.js", "/build/_shared/chunk-LUNZM2Y3.js", "/build/_shared/chunk-RC6NYAFI.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-E6SA7XVY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/imagemanager": { id: "routes/imagemanager", parentId: "root", path: "imagemanager", index: void 0, caseSensitive: void 0, module: "/build/routes/imagemanager-Q2Q22V4M.js", imports: ["/build/_shared/chunk-OMMTXYQB.js", "/build/_shared/chunk-HITQAIKO.js", "/build/_shared/chunk-LUNZM2Y3.js", "/build/_shared/chunk-RC6NYAFI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-EEYRHECX.js", imports: ["/build/_shared/chunk-IRYEX53N.js", "/build/_shared/chunk-L27AEQYI.js", "/build/_shared/chunk-DYV54FQG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-4AIQPFLM.js", imports: ["/build/_shared/chunk-IRYEX53N.js", "/build/_shared/chunk-L27AEQYI.js", "/build/_shared/chunk-DYV54FQG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login2": { id: "routes/login2", parentId: "root", path: "login2", index: void 0, caseSensitive: void 0, module: "/build/routes/login2-QOYBCN4W.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-HOPHOQJQ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-RMZBZ5CT.js", imports: ["/build/_shared/chunk-L27AEQYI.js", "/build/_shared/chunk-KZNWDO46.js", "/build/_shared/chunk-DYV54FQG.js", "/build/_shared/chunk-OMMTXYQB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-3XDRJFYG.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/notes._index": { id: "routes/notes._index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes._index-U3QX5HOX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.edit.$noteId": { id: "routes/notes.edit.$noteId", parentId: "routes/notes", path: "edit/:noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.edit.$noteId-QW25SMCE.js", imports: ["/build/_shared/chunk-HITQAIKO.js", "/build/_shared/chunk-LUNZM2Y3.js", "/build/_shared/chunk-RC6NYAFI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.new": { id: "routes/notes.new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.new-3IDMRXD7.js", imports: ["/build/_shared/chunk-LUNZM2Y3.js", "/build/_shared/chunk-RC6NYAFI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-5ORFNVJ4.js", imports: ["/build/_shared/chunk-DYV54FQG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/showRes": { id: "routes/showRes", parentId: "root", path: "showRes", index: void 0, caseSensitive: void 0, module: "/build/routes/showRes-FJJNGAKO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/upload": { id: "routes/upload", parentId: "root", path: "upload", index: void 0, caseSensitive: void 0, module: "/build/routes/upload-UGSJVCY4.js", imports: ["/build/_shared/chunk-HITQAIKO.js", "/build/_shared/chunk-LUNZM2Y3.js", "/build/_shared/chunk-RC6NYAFI.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-7CEAFF07.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api.$userid.note.$noteid.show": {
    id: "routes/api.$userid.note.$noteid.show",
    parentId: "root",
    path: "api/:userid/note/:noteid/show",
    index: void 0,
    caseSensitive: void 0,
    module: api_userid_note_noteid_show_exports
  },
  "routes/notes.edit.$noteId": {
    id: "routes/notes.edit.$noteId",
    parentId: "routes/notes",
    path: "edit/:noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_edit_noteId_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/imagemanager": {
    id: "routes/imagemanager",
    parentId: "root",
    path: "imagemanager",
    index: void 0,
    caseSensitive: void 0,
    module: imagemanager_exports
  },
  "routes/notes._index": {
    id: "routes/notes._index",
    parentId: "routes/notes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: notes_index_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/folderNew": {
    id: "routes/folderNew",
    parentId: "root",
    path: "folderNew",
    index: void 0,
    caseSensitive: void 0,
    module: folderNew_exports
  },
  "routes/notes.new": {
    id: "routes/notes.new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: notes_new_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/showRes": {
    id: "routes/showRes",
    parentId: "root",
    path: "showRes",
    index: void 0,
    caseSensitive: void 0,
    module: showRes_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login2": {
    id: "routes/login2",
    parentId: "root",
    path: "login2",
    index: void 0,
    caseSensitive: void 0,
    module: login2_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/upload": {
    id: "routes/upload",
    parentId: "root",
    path: "upload",
    index: void 0,
    caseSensitive: void 0,
    module: upload_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
