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
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 87,
          columnNumber: 7
        },
        this
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
var tailwind_default = "/build/_assets/tailwind-AYOWR3MK.css";

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/user.server.ts
var import_supabase_js = require("@supabase/supabase-js"), supabaseUrl = "https://jrppesgzrtbbqriuypku.supabase.co", supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpycHBlc2d6cnRiYnFyaXV5cGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMjYwMDksImV4cCI6MTk5NzYwMjAwOX0.mVBmQ2FuHX5r4vfrsllMAVZJrrIb3Bx-HjJWyz3HNCo", supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey, {
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
    secure: !1
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
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full bg-dark", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/notes.edit.$noteId.tsx
var notes_edit_noteId_exports = {};
__export(notes_edit_noteId_exports, {
  action: () => action,
  default: () => EditNotePage,
  loader: () => loader2,
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
    select: { id: !0, body: !0, img: !0, title: !0 },
    where: { id, userId }
  });
}
async function getFolderListItems({ userId }) {
  return console.log("userId", userId), await prisma.folder.findMany({
    where: { userId },
    select: { id: !0, name: !0 },
    orderBy: { updatedAt: "desc" }
  }) || [];
}
async function getNoteListItems({ userId }) {
  return console.log("userId", userId), await prisma.note.findMany({
    where: { userId },
    select: { id: !0, title: !0, folder: !0 },
    orderBy: [{ folder: { name: "asc" } }, { updatedAt: "desc" }]
  }) || [];
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
  folder,
  body,
  title,
  img,
  userId
}) {
  return prisma.note.create({
    data: {
      folder: {
        connect: {
          id: folder
        }
      },
      title,
      body,
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
var import_react4 = require("react"), import_supabase_js2 = require("@supabase/supabase-js"), import_uuid = require("uuid"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), supabase2 = (0, import_supabase_js2.createClient)("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
async function loader2({ request, params }) {
  let userId = await requireUserId(request), note = await getNote({ userId, id: params.noteId }) || {};
  if (console.log(11, note), !note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node4.json)({ note });
}
async function action({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), id = formData.get("id"), title = formData.get("title"), body = formData.get("body"), image = formData.get("image"), noimage = formData.get("noimage");
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
  let obj = { id, title, body, userId };
  obj.img = image, console.log(2, noimage), noimage == "true" && (obj.img = "");
  let note = await updateNote(obj);
  return (0, import_node4.redirect)(`/notes/${note.id}`);
}
function EditNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let data2 = (0, import_react3.useLoaderData)(), actionData = (0, import_react3.useActionData)(), idRef = React.useRef(null), titleRef = React.useRef(null), bodyRef = React.useRef(null), imageRef = React.useRef(null), noimageRef = React.useRef("false"), [file, setfile] = (0, import_react4.useState)([]), [db_fileName, db_setFileName] = (0, import_react4.useState)([]), submit = (0, import_react_router_dom.useSubmit)();
  React.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]);
  let handleFileSelected = (e) => {
    setfile(e.target.files[0]);
  }, handleSubmit = async (e) => {
    e.preventDefault(), console.log(file.length);
    let formData = new FormData();
    if (formData.set("id", idRef.current.value), formData.set("title", titleRef.current.value), formData.set("body", bodyRef.current.value), formData.set("noimage", noimageRef.current.checked), file.length !== 0) {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                ref: idRef,
                hidden: !0,
                name: "id",
                defaultValue: data2.note.id,
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.edit.$noteId.tsx",
                lineNumber: 147,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Title: " }, void 0, !1, {
              fileName: "app/routes/notes.edit.$noteId.tsx",
              lineNumber: 154,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                ref: titleRef,
                id: "title",
                name: "title",
                defaultValue: data2.note.title,
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
                "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.edit.$noteId.tsx",
                lineNumber: 155,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 146,
            columnNumber: 9
          }, this),
          ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, !1, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 168,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 145,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Body: " }, void 0, !1, {
              fileName: "app/routes/notes.edit.$noteId.tsx",
              lineNumber: 176,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "textarea",
              {
                ref: bodyRef,
                name: "body",
                defaultValue: data2.note.body,
                rows: 8,
                className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
                "aria-invalid": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.body ? !0 : void 0,
                "aria-errormessage": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.body ? "body-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.edit.$noteId.tsx",
                lineNumber: 177,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 175,
            columnNumber: 9
          }, this),
          ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.body) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, !1, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 191,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 174,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Sem imagem: " }, void 0, !1, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 198,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { ref: noimageRef, type: "checkbox", id: "noimage", name: "noimage", value: "true" }, void 0, !1, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 199,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 197,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 196,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Img: " }, void 0, !1, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 204,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "input",
            {
              ref: imageRef,
              name: "image",
              defaultValue: data2.note.img,
              className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/notes.edit.$noteId.tsx",
              lineNumber: 205,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "file", name: "image", onChange: handleFileSelected }, void 0, !1, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 211,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 203,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 202,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 216,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 215,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/notes.edit.$noteId.tsx",
      lineNumber: 134,
      columnNumber: 5
    },
    this
  );
}

// app/routes/notes.$noteId.tsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action2,
  default: () => NoteDetailsPage,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
async function loader3({ request, params }) {
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
  let data2 = (0, import_react5.useLoaderData)(), CDNURL2 = "", navigate = (0, import_react6.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-dark text-slate-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-2xl font-bold", children: data2.note.title }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("pre", { children: data2.note.body }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 58,
      columnNumber: 27
    }, this) }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "py-6", children: data2.note.img && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: `${data2.note.img}`, alt: "dd", style: { width: "100px" } }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 59,
      columnNumber: 43
    }, this) }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => navigate("/notes/edit/" + data2.note.id),
          className: "rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600 focus:bg-blue-400",
          children: "Edit"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/notes.$noteId.tsx",
          lineNumber: 62,
          columnNumber: 9
        },
        this
      ),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded bg-red-500  px-4 py-1 text-white hover:bg-red-800 focus:bg-blue-400",
          children: "Delete"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/notes.$noteId.tsx",
          lineNumber: 65,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react5.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 80,
    columnNumber: 12
  }, this) : (0, import_react5.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "Note not found" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 88,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 84,
    columnNumber: 12
  }, this);
}

// app/routes/imagemanager.tsx
var imagemanager_exports = {};
__export(imagemanager_exports, {
  default: () => imagemanager,
  loader: () => loader4
});
var import_react7 = require("react"), import_react_bootstrap = require("react-bootstrap"), import_Button2 = __toESM(require("react-bootstrap/Button")), import_supabase_js3 = require("@supabase/supabase-js"), import_node6 = require("@remix-run/node"), import_react8 = __toESM(require("react")), import_uuid2 = require("uuid"), import_server_runtime = require("@remix-run/server-runtime");

// app/components/modal.tsx
var import_Button = __toESM(require("react-bootstrap/Button")), import_Modal = __toESM(require("react-bootstrap/Modal")), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Example({ title, children, show, setShow, showFooterButtons }) {
  let handleClose = () => setShow(!1), handleShow = () => setShow(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_Modal.default, { show, onHide: handleClose, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_Modal.default.Header, { closeButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_Modal.default.Title, { children: title }, void 0, !1, {
      fileName: "app/components/modal.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/modal.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_Modal.default.Body, { children }, void 0, !1, {
      fileName: "app/components/modal.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    showFooterButtons && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_Modal.default.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_Button.default, { variant: "secondary", onClick: handleClose, children: "Close" }, void 0, !1, {
        fileName: "app/components/modal.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_Button.default, { variant: "primary", onClick: handleClose, children: "Save Changes" }, void 0, !1, {
        fileName: "app/components/modal.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/modal.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/modal.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/modal.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var modal_default = Example;

// app/routes/imagemanager.tsx
var import_react9 = require("@remix-run/react"), import_tfi = require("react-icons/tfi"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), CDNURL = "https://jrppesgzrtbbqriuypku.supabase.co/storage/v1/object/public/files/", loader4 = async ({ request }) => {
  let userId = await getUserId(request), env = {
    SUPABASE_URL_RAW: process.env.SUPABASE_URL_RAW,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  };
  return userId ? (0, import_node6.json)({ userId, env }) : (0, import_server_runtime.redirect)("/login");
};
function imagemanager() {
  var _a;
  let data2 = (0, import_react9.useLoaderData)(), [url, setUrl] = (0, import_react7.useState)(""), urlRef = import_react8.default.useRef(null), formUploadRef = import_react8.default.useRef(null), fileNewNameRef = import_react8.default.useRef(null), [filesData, setFilesData] = (0, import_react7.useState)([]), [file, setfile] = (0, import_react7.useState)([]), [user, setUser] = (0, import_react7.useState)(data2.userId), [urlType, setUrlType] = (0, import_react7.useState)(""), newFolderRef = import_react8.default.useRef(null), uploadTxtRef = import_react8.default.useRef(null), [show, setShow] = (0, import_react7.useState)(!1), [showRenomear, setShowRenomear] = (0, import_react7.useState)(!1), [fileCopyAction, setFileCopyAction] = (0, import_react7.useState)(""), [folderCopyAction, setFolderCopyAction] = (0, import_react7.useState)(""), [selectFile, setSelectFile] = (0, import_react7.useState)(""), bucket = "files", supabase6 = (0, import_supabase_js3.createClient)(data2.env.SUPABASE_URL_RAW, data2.env.SUPABASE_ANON_KEY, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: " text-white pt-10 pb-2 text-center", style: { width: "80%", margin: "auto" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children: "Gerenciador de arquivos" }, void 0, !1, {
      fileName: "app/routes/imagemanager.tsx",
      lineNumber: 365,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/imagemanager.tsx",
      lineNumber: 364,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(modal_default, { title: "Renomear arquivo", show: showRenomear, setShow: setShowRenomear, showFooterButtons: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Form.Group, { className: "mb-3", controlId: "formBasicEmail", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Form.Label, { children: "Digite o novo nome" }, void 0, !1, {
              fileName: "app/routes/imagemanager.tsx",
              lineNumber: 415,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Form.Control, { type: "text", ref: fileNewNameRef, defaultValue: url.split("/").pop(), name: "fileNewName" }, void 0, !1, {
              fileName: "app/routes/imagemanager.tsx",
              lineNumber: 416,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/imagemanager.tsx",
            lineNumber: 414,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
              children: "Renomear arquivo"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/imagemanager.tsx",
              lineNumber: 418,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 413,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 401,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/imagemanager.tsx",
      lineNumber: 400,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(modal_default, { title: "Enviar arquivo", show, setShow, showFooterButtons: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Form.Group, { controlId: "formFileSm", className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Form.Control, { type: "file", size: "sm", name: "image", onChange: (event) => handleFileSelected(event), accept: "image" }, void 0, !1, {
            fileName: "app/routes/imagemanager.tsx",
            lineNumber: 450,
            columnNumber: 27
          }, this) }, void 0, !1, {
            fileName: "app/routes/imagemanager.tsx",
            lineNumber: 448,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
              children: "Enviar arquivo"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/imagemanager.tsx",
              lineNumber: 456,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 440,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 428,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/imagemanager.tsx",
      lineNumber: 427,
      columnNumber: 13
    }, this),
    (_a = uploadTxtRef.current) == null ? void 0 : _a.value,
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { width: "80%", margin: "auto", marginTop: "10px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.InputGroup, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.InputGroup.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_Button2.default, { variant: "primary", onClick: () => goHome(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_tfi.TfiHome, {}, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 474,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 473,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 472,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.InputGroup.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_Button2.default, { variant: "primary", onClick: () => back(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_tfi.TfiArrowCircleLeft, {}, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 479,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 478,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 477,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react_bootstrap.Form.Control,
          {
            name: "url",
            ref: urlRef,
            defaultValue: url
          },
          void 0,
          !1,
          {
            fileName: "app/routes/imagemanager.tsx",
            lineNumber: 482,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.InputGroup.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_Button2.default, { variant: "primary", onClick: () => goUrl(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_tfi.TfiArrowCircleRight, {}, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 490,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 489,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 488,
          columnNumber: 21
        }, this),
        urlType == "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.InputGroup.Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_Button2.default, { variant: "primary", onClick: () => navigator.clipboard.writeText(data2.env.SUPABASE_URL_RAW + "/storage/v1/object/public/files/" + user + "/" + urlRef.current.value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_tfi.TfiClipboard, {}, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 497,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 496,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 495,
          columnNumber: 25
        }, this),
        (urlType == "folder" || url == "" || url == "/") && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react_bootstrap.DropdownButton,
          {
            as: import_react_bootstrap.ButtonGroup,
            title: "Comandos",
            id: "bg-vertical-dropdown-1",
            children: [
              urlType == "folder" && fileCopyAction && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Dropdown.Item, { eventKey: "3", onClick: () => fileCopyDo(), children: "Colar" }, void 0, !1, {
                fileName: "app/routes/imagemanager.tsx",
                lineNumber: 514,
                columnNumber: 29
              }, this),
              urlType == "folder" && selectFile && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Dropdown.Item, { eventKey: "3", onClick: () => movePaste(), children: "Colar" }, void 0, !1, {
                fileName: "app/routes/imagemanager.tsx",
                lineNumber: 518,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Dropdown.Item, { eventKey: "1", onClick: () => goNewFolder(), children: "Nova pasta" }, void 0, !1, {
                fileName: "app/routes/imagemanager.tsx",
                lineNumber: 521,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Dropdown.Item, { eventKey: "2", onClick: () => goUpload(), children: "Enviar arquivo" }, void 0, !1, {
                fileName: "app/routes/imagemanager.tsx",
                lineNumber: 522,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Dropdown.Item, { eventKey: "3", onClick: () => deleteFolder(), children: "Excluir pasta" }, void 0, !1, {
                fileName: "app/routes/imagemanager.tsx",
                lineNumber: 523,
                columnNumber: 25
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/imagemanager.tsx",
            lineNumber: 502,
            columnNumber: 25
          },
          this
        ),
        urlType == "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react_bootstrap.DropdownButton,
          {
            as: import_react_bootstrap.ButtonGroup,
            title: "Comandos",
            id: "bg-vertical-dropdown-1",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Dropdown.Item, { eventKey: "4", onClick: () => setShowRenomear(!0), children: "Renomear arquivo" }, void 0, !1, {
                fileName: "app/routes/imagemanager.tsx",
                lineNumber: 532,
                columnNumber: 29
              }, this),
              !fileCopyAction && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Dropdown.Item, { eventKey: "5", onClick: () => setFileCopyAction(url), children: "Copiar arquivo" }, void 0, !1, {
                fileName: "app/routes/imagemanager.tsx",
                lineNumber: 534,
                columnNumber: 33
              }, this),
              !selectFile && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Dropdown.Item, { eventKey: "6", onClick: () => setSelectFile(url), children: "Cortar arquivo" }, void 0, !1, {
                fileName: "app/routes/imagemanager.tsx",
                lineNumber: 537,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Dropdown.Item, { eventKey: "6", onClick: () => goDelete(), children: "Excluir arquivo" }, void 0, !1, {
                fileName: "app/routes/imagemanager.tsx",
                lineNumber: 539,
                columnNumber: 29
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/imagemanager.tsx",
            lineNumber: 527,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 471,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 543,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Row, { xs: 1, md: 4, className: "g-4", children: urlType !== "img" && filesData.filter((x) => !x.name.includes("undefined") && x.name !== ".initial").map((image) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Col, { children: image.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Card.Img, { variant: "top", style: { width: "50vw", height: "38vh", objectFit: "cover" }, src: CDNURL + "/" + user + "/" + url + "/" + image.name, onClick: () => {
        setUrlType("img"), setUrl(url + "/" + image.name);
      } }, void 0, !1, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 577,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 576,
        columnNumber: 25
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Card, { style: { backgroundColor: "#19376D" }, onClick: () => {
        setUrlType("folder"), list_files(url, image.name);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.Card.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/img/folder2.png", alt: "" }, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 565,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap.InputGroup, { className: "mb-3 pl-2", style: { color: "white" }, children: image.name }, void 0, !1, {
          fileName: "app/routes/imagemanager.tsx",
          lineNumber: 568,
          columnNumber: 37
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 563,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 561,
        columnNumber: 29
      }, this) }, CDNURL + "/" + image.name, !1, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 559,
        columnNumber: 21
      }, this)) }, void 0, !1, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 556,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: urlType == "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-100 d-flex justify-content-center mt-2 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: CDNURL + "/" + user + "/" + url }, void 0, !1, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 619,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 618,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 596,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/imagemanager.tsx",
        lineNumber: 594,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/imagemanager.tsx",
      lineNumber: 470,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/imagemanager.tsx",
    lineNumber: 362,
    columnNumber: 9
  }, this);
}

// app/routes/notes._index.tsx
var notes_index_exports = {};
__export(notes_index_exports, {
  default: () => NoteIndexPage
});
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
    "Selecione uma nota, ou",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.Link, { to: "new", className: "text-blue-500 underline", children: "crie uma nova." }, void 0, !1, {
      fileName: "app/routes/notes._index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes._index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader5
});
async function loader5({ request }) {
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
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Nome da pasta: " }, void 0, !1, {
            fileName: "app/routes/folderNew.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              ref: folderNameRef,
              id: "folderName",
              name: "folderName",
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/folderNew.tsx",
              lineNumber: 84,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/folderNew.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/folderNew.tsx",
          lineNumber: 81,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-left mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Salvar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/folderNew.tsx",
            lineNumber: 93,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/folderNew.tsx",
          lineNumber: 92,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/folderNew.tsx",
      lineNumber: 71,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/folderNew.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

// app/routes/notes.new.tsx
var notes_new_exports = {};
__export(notes_new_exports, {
  action: () => action4,
  default: () => NewNotePage2,
  loader: () => loader6,
  supabase: () => supabase4
});
var import_node8 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), React4 = __toESM(require("react")), import_react_router_dom2 = require("react-router-dom");
var import_react13 = require("react"), import_supabase_js5 = require("@supabase/supabase-js");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
var supabase4 = (0, import_supabase_js5.createClient)("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
async function loader6({ request, params }) {
  let env = {
    SUPABASE_URL_RAW: process.env.SUPABASE_URL_RAW,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  }, userId = await requireUserId(request), folders = await getFolderListItems({ userId });
  return console.log("folders:", folders), (0, import_node8.json)({ folders, env });
}
async function action4({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), folder = formData.get("folder"), title = formData.get("title"), body = formData.get("body"), image = formData.get("image");
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
  let note = await createNote({ folder, title, body, img: image, userId });
  return (0, import_node8.redirect)(`/notes/${note.id}`);
}
function NewNotePage2() {
  var _a, _b, _c, _d;
  let data2 = (0, import_react12.useLoaderData)(), actionData = (0, import_react12.useActionData)(), titleRef = React4.useRef(null), bodyRef = React4.useRef(null), imageRef = React4.useRef(null), [file, setfile] = (0, import_react13.useState)([]), [filesData, setFilesData] = (0, import_react13.useState)([]), [db_fileName, db_setFileName] = (0, import_react13.useState)([]), submit = (0, import_react_router_dom2.useSubmit)();
  console.log("data:", data2.folders), React4.useEffect(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { for: "folder", className: "flex w-full flex-col gap-1  text-gray-50", children: [
            "Pasta",
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("select", { id: "folder", name: "folder", className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6", children: data2.folders.map(
              (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: item.id, children: item.name }, item.id, !1, {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 135,
                columnNumber: 15
              }, this)
            ) }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 133,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 132,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { for: "title", className: "flex w-full flex-col gap-1  text-gray-50", children: [
            "Titulo:",
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "input",
              {
                ref: titleRef,
                id: "title",
                name: "title",
                className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
                "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 140,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "Texto: " }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "textarea",
            {
              ref: bodyRef,
              name: "body",
              rows: 8,
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
              "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.body ? !0 : void 0,
              "aria-errormessage": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.body ? "body-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 158,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 155,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "Imagem: " }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 174,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              ref: imageRef,
              name: "image",
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 175,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 173,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 172,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-left mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Salvar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 191,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 190,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 119,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/notes.new.tsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_react16 = require("@remix-run/react");

// app/utils.ts
var import_react14 = require("@remix-run/react"), import_react15 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react14.useMatches)(), route = (0, import_react15.useMemo)(
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
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), meta = () => [{ title: "Remix Notes" }];
function Index() {
  let user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "bg-dark relative min-h-screen sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "absolute inset-0" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative px-4 pb-8 pt-5 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-15", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "block uppercase text-yellow-500 drop-shadow-md", children: "MW Notes2" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react16.Link,
        {
          to: "/notes",
          className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
          children: [
            "Notas de ",
            user.email
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 35,
          columnNumber: 19
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_react16.Link,
          {
            to: "/join",
            className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
            children: "Inscrever"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 43,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_react16.Link,
          {
            to: "/login",
            className: "flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600",
            children: "Entrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 49,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 42,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/login2.tsx
var login2_exports = {};
__export(login2_exports, {
  loader: () => loader7
});
var import_node9 = require("@remix-run/node"), import_auth_helpers_remix = require("@supabase/auth-helpers-remix"), loader7 = async ({ request }) => {
  let response = new Response(), supabaseClient = (0, import_auth_helpers_remix.createServerClient)(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    { request, response }
  ), { data: data2 } = await supabaseClient.from("test").select("*");
  return (0, import_node9.json)(
    { data: data2 },
    {
      headers: response.headers
    }
  );
};

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action5,
  loader: () => loader8
});
var import_node10 = require("@remix-run/node");
async function action5({ request }) {
  return logout(request);
}
async function loader8() {
  return (0, import_node10.redirect)("/");
}

// app/routes/upload.tsx
var upload_exports = {};
__export(upload_exports, {
  default: () => Page,
  supabase: () => supabase5
});
var import_react17 = require("react"), import_supabase_js6 = require("@supabase/supabase-js"), import_uuid3 = require("uuid"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), supabase5 = (0, import_supabase_js6.createClient)("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
function Page() {
  let [file, setfile] = (0, import_react17.useState)([]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { onSubmit: async (e) => {
    e.preventDefault();
    let filename = `${(0, import_uuid3.v4)()}-${file.name}`, { data: data2, error } = await supabase5.storage.from("files").upload(filename, file, {
      cacheControl: "3600",
      upsert: !1
    }), filepath = data2.path;
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "file", name: "image", onChange: (e) => {
      setfile(e.target.files[0]);
    } }, void 0, !1, {
      fileName: "app/routes/upload.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/upload.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { type: "submit", children: "Upload image" }, void 0, !1, {
      fileName: "app/routes/upload.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/upload.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => LoginPage,
  loader: () => loader9,
  meta: () => meta2
});
var import_node11 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), React5 = __toESM(require("react"));
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function loader9({ request }) {
  return await getUserId(request) ? (0, import_node11.redirect)("/") : (0, import_node11.json)({});
}
async function action6({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/notes"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node11.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node11.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node11.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    request,
    userId: user.id,
    remember: remember === "on",
    redirectTo
  }) : (0, import_node11.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}
var meta2 = () => [{ title: "Login" }];
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react18.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react18.useActionData)(), emailRef = React5.useRef(null), passwordRef = React5.useRef(null);
  return React5.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex mt-20 min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react18.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-full justify-center text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { children: "Entrar" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 82,
      columnNumber: 66
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-white",
          children: "Email"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 84,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 91,
            columnNumber: 15
          },
          this
        ),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 104,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-white",
          children: "Senha"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 112,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 119,
            columnNumber: 15
          },
          this
        ),
        ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 130,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 137,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Entrar"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 138,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 146,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-100",
            children: "Lembrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 152,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
        "Ainda n\xE3o tem conta?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          import_react18.Link,
          {
            className: "text-blue-500 underline",
            to: {
              pathname: "/join",
              search: searchParams.toString()
            },
            children: "Registrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 161,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 159,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 144,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader10
});
var import_node12 = require("@remix-run/node"), import_react19 = require("@remix-run/react");
var import_react_router_dom3 = require("react-router-dom"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
async function loader10({ request }) {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node12.json)({ noteListItems });
}
function NotesPage() {
  let navigate = (0, import_react_router_dom3.useNavigate)(), data2 = (0, import_react19.useLoaderData)(), user = useUser(), folderNew = () => {
    let a = prompt("Nome da pasta");
    folderNew(a);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("header", { className: "flex pt-6 items-center justify-between bg-slate-800 p-2 text-white no-underline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h5", { className: "text-1xl font-sans	pt-1 pl-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react19.Link, { to: ".", className: "no-underline text-yellow-500", children: "MW Notes" }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react19.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded bg-slate-600 px-4 py-1 text-blue-100 hover:bg-blue-500 active:bg-blue-600 text-xs",
          children: user.email
        },
        void 0,
        !1,
        {
          fileName: "app/routes/notes.tsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { className: "flex h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "h-full w-1/5 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { class: "inline-flex rounded-md shadow-sm h-100 mt-3 pl-3", role: "group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { onClick: () => navigate("/folderNew"), type: "button", className: "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 text-white", children: "+ pasta" }, void 0, !1, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { type: "button", onClick: () => navigate("new"), className: "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700  text-white", children: "+ nota" }, void 0, !1, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 63,
          columnNumber: 16
        }, this),
        data2.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "p-2", children: "Nenhuma nota ainda" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ol", { children: data2.noteListItems.map((note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
          index == 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text-slate-100", children: note.folder.name }, void 0, !1, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 75,
            columnNumber: 30
          }, this),
          data2.noteListItems[index == 0 ? 0 : index - 1].folder.id !== data2.noteListItems[index].folder.id && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text-slate-100", children: note.folder.name }, void 0, !1, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 76,
            columnNumber: 108
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { className: "flex space-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { className: "text-slate-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_react19.NavLink,
            {
              className: ({ isActive }) => `block no-underline p-1 text-base ${isActive ? "text-green-400" : "text-slate-100"}`,
              to: note.id,
              children: [
                note.folder.name,
                " ",
                note.title
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/notes.tsx",
              lineNumber: 79,
              columnNumber: 21
            },
            this
          ) }, note.id, !1, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 78,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 77,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react19.Outlet, {}, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action7,
  default: () => Join,
  loader: () => loader11,
  meta: () => meta3
});
var import_node13 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), React6 = __toESM(require("react"));
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function loader11({ request }) {
  return await getUserId(request) ? (0, import_node13.redirect)("/") : (0, import_node13.json)({});
}
async function action7({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node13.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node13.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node13.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node13.json)(
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
  let [searchParams] = (0, import_react20.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react20.useActionData)(), emailRef = React6.useRef(null), passwordRef = React6.useRef(null);
  return React6.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mx-auto pt-20 w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react20.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex w-full justify-center text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { children: "Registrar" }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 89,
      columnNumber: 66
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-white",
          children: "Email"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 91,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 98,
            columnNumber: 15
          },
          this
        ),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-white",
          children: "Senha"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 119,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 126,
            columnNumber: 15
          },
          this
        ),
        ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 144,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Registrar"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/join.tsx",
        lineNumber: 145,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "J\xE1 tem uma conta?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_react20.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Entrar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 154,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 152,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 151,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 88,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 87,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d4901e4e", entry: { module: "/build/entry.client-4KAFWHJW.js", imports: ["/build/_shared/chunk-GTNGNULT.js", "/build/_shared/chunk-ZHWZEVSQ.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EOPDPAWO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WSFJKSHY.js", imports: ["/build/_shared/chunk-7X35FQYH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/folderNew": { id: "routes/folderNew", parentId: "root", path: "folderNew", index: void 0, caseSensitive: void 0, module: "/build/routes/folderNew-UXSURDCV.js", imports: ["/build/_shared/chunk-E4QSSUG6.js", "/build/_shared/chunk-GLWAIFE6.js", "/build/_shared/chunk-KKQLPYR7.js", "/build/_shared/chunk-SPUIDVFV.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-QB3PEZAZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/imagemanager": { id: "routes/imagemanager", parentId: "root", path: "imagemanager", index: void 0, caseSensitive: void 0, module: "/build/routes/imagemanager-S6LJXLRN.js", imports: ["/build/_shared/chunk-OXVWDGG7.js", "/build/_shared/chunk-KKQLPYR7.js", "/build/_shared/chunk-SPUIDVFV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-IJ2WIMTC.js", imports: ["/build/_shared/chunk-M2ND3YFM.js", "/build/_shared/chunk-7X35FQYH.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-H4Z452H4.js", imports: ["/build/_shared/chunk-M2ND3YFM.js", "/build/_shared/chunk-7X35FQYH.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login2": { id: "routes/login2", parentId: "root", path: "login2", index: void 0, caseSensitive: void 0, module: "/build/routes/login2-VURX4CXJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-DOMDNNGV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-JJUA4RKZ.js", imports: ["/build/_shared/chunk-7X35FQYH.js", "/build/_shared/chunk-E4QSSUG6.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-NEYKGJUL.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/notes._index": { id: "routes/notes._index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes._index-PA7KYYDT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.edit.$noteId": { id: "routes/notes.edit.$noteId", parentId: "routes/notes", path: "edit/:noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.edit.$noteId-G74LKYL7.js", imports: ["/build/_shared/chunk-OXVWDGG7.js", "/build/_shared/chunk-KKQLPYR7.js", "/build/_shared/chunk-SPUIDVFV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.new": { id: "routes/notes.new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.new-QQ4KEIHX.js", imports: ["/build/_shared/chunk-KKQLPYR7.js", "/build/_shared/chunk-SPUIDVFV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/upload": { id: "routes/upload", parentId: "root", path: "upload", index: void 0, caseSensitive: void 0, module: "/build/routes/upload-4QPQQEII.js", imports: ["/build/_shared/chunk-OXVWDGG7.js", "/build/_shared/chunk-KKQLPYR7.js", "/build/_shared/chunk-SPUIDVFV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-D4901E4E.js" };

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
//# sourceMappingURL=index.js.map
