import {
  require_note
} from "/build/_shared/chunk-BOCVWV7G.js";
import {
  require_session
} from "/build/_shared/chunk-UUXYXIFE.js";
import {
  v4_default
} from "/build/_shared/chunk-OXVWDGG7.js";
import {
  createClient
} from "/build/_shared/chunk-UHWRWWT5.js";
import "/build/_shared/chunk-MZ4QRB3L.js";
import {
  Form,
  init_dist,
  useActionData,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-OWPABCHM.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3QIN6FEG.js";
import {
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// app/routes/notes.edit.$noteId.tsx
var React = __toESM(require_react());
init_dist();
var import_note = __toESM(require_note());
var import_session = __toESM(require_session());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var supabase = createClient("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
function EditNotePage() {
  var _a, _b, _c, _d, _e, _f;
  const data = useLoaderData();
  const actionData = useActionData();
  const idRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const tagsRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const noimageRef = React.useRef("false");
  const [file, setfile] = (0, import_react2.useState)([]);
  const [db_fileName, db_setFileName] = (0, import_react2.useState)([]);
  const submit = useSubmit();
  React.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.title) {
      (_b2 = titleRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.body) {
      (_d2 = bodyRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  const handleFileSelected = (e) => {
    setfile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file.length);
    let formData = new FormData();
    formData.set("id", idRef.current.value);
    formData.set("title", titleRef.current.value);
    formData.set("tags", tagsRef.current.value);
    formData.set("body", bodyRef.current.value);
    formData.set("noimage", noimageRef.current.checked);
    if (file.length !== 0) {
      const filename = `${v4_default()}-${file.name}`;
      const { data: data2, error } = await supabase.storage.from("files").upload(filename, file, {
        cacheControl: "3600",
        upsert: false
      });
      const filepath = data2.path;
      formData.set("image", filepath);
    }
    console.log(noimageRef.current.checked);
    if (noimageRef.current.checked) {
      formData.set("image", "");
    }
    submit(
      formData,
      { method: "post" }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Form,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1 text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: idRef,
                hidden: true,
                name: "id",
                defaultValue: data.note.id,
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
              },
              void 0,
              false,
              {
                fileName: "app/routes/notes.edit.$noteId.tsx",
                lineNumber: 150,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Titulo: " }, void 0, false, {
              fileName: "app/routes/notes.edit.$noteId.tsx",
              lineNumber: 157,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: titleRef,
                id: "title",
                name: "title",
                defaultValue: data.note.title,
                className: " text-gray-50 bg-slate-700 border-slate-800 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
                "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) ? true : void 0,
                "aria-errormessage": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.title) ? "title-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/notes.edit.$noteId.tsx",
                lineNumber: 158,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 149,
            columnNumber: 9
          }, this),
          ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, false, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 171,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 148,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1 text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Nota: " }, void 0, false, {
              fileName: "app/routes/notes.edit.$noteId.tsx",
              lineNumber: 179,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "textarea",
              {
                ref: bodyRef,
                name: "body",
                defaultValue: data.note.body,
                rows: 8,
                className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
                "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.body) ? true : void 0,
                "aria-errormessage": ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.body) ? "body-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/notes.edit.$noteId.tsx",
                lineNumber: 180,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 178,
            columnNumber: 9
          }, this),
          ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.body) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, false, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 194,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 177,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1 text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Tags: " }, void 0, false, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 208,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: tagsRef,
              name: "tags",
              defaultValue: data.note.tags,
              className: " text-gray-50 bg-slate-700 border-slate-800 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            },
            void 0,
            false,
            {
              fileName: "app/routes/notes.edit.$noteId.tsx",
              lineNumber: 209,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 207,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 206,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1 text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Img: " }, void 0, false, {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 221,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: imageRef,
              name: "image",
              defaultValue: data.note.img,
              className: " text-gray-50 bg-slate-700 border-slate-800 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            },
            void 0,
            false,
            {
              fileName: "app/routes/notes.edit.$noteId.tsx",
              lineNumber: 222,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 220,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 219,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Save"
          },
          void 0,
          false,
          {
            fileName: "app/routes/notes.edit.$noteId.tsx",
            lineNumber: 233,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/notes.edit.$noteId.tsx",
          lineNumber: 232,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/notes.edit.$noteId.tsx",
      lineNumber: 137,
      columnNumber: 5
    },
    this
  );
}
export {
  EditNotePage as default
};
//# sourceMappingURL=/build/routes/notes.edit.$noteId-4GEH2YRQ.js.map
