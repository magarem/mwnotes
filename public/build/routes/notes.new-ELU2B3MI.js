import {
  require_note
} from "/build/_shared/chunk-BOCVWV7G.js";
import {
  require_session
} from "/build/_shared/chunk-UUXYXIFE.js";
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

// app/routes/notes.new.tsx
var React = __toESM(require_react());
init_dist();
var import_note = __toESM(require_note());
var import_session = __toESM(require_session());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var supabase = createClient("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  const data = useLoaderData();
  const actionData = useActionData();
  const titleRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const tagsRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const [file, setfile] = (0, import_react2.useState)([]);
  const [filesData, setFilesData] = (0, import_react2.useState)([]);
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
  const folderNew = async () => {
    try {
      const config = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      const response = await fetch("url", config);
      if (response.ok) {
        return response;
      } else {
      }
    } catch (error) {
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "flex w-full flex-col gap-1  text-gray-50", children: [
          "Titulo:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              autoFocus: true,
              ref: titleRef,
              id: "title",
              name: "title",
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
              "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) ? true : void 0,
              "aria-errormessage": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.title) ? "title-error" : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 142,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 132,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Texto: " }, void 0, false, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "textarea",
            {
              ref: bodyRef,
              name: "body",
              rows: 8,
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
              "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.body) ? true : void 0,
              "aria-errormessage": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.body) ? "body-error" : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 158,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 155,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "tags", className: "flex w-full flex-col gap-1  text-gray-50", children: [
          "Marcadores:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              autoFocus: true,
              ref: tagsRef,
              id: "tags",
              name: "tags",
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6",
              "aria-invalid": ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.title) ? true : void 0,
              "aria-errormessage": ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.title) ? "title-error" : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 173,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 172,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 171,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Imagem: " }, void 0, false, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 188,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              ref: imageRef,
              name: "image",
              className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
            },
            void 0,
            false,
            {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 189,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 187,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 186,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Salvar"
          },
          void 0,
          false,
          {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 205,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 204,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 121,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/notes.new.tsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
}
export {
  NewNotePage as default
};
//# sourceMappingURL=/build/routes/notes.new-ELU2B3MI.js.map
