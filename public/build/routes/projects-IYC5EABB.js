import {
  require_session
} from "/build/_shared/chunk-UUXYXIFE.js";
import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-OWPABCHM.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3QIN6FEG.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// empty-module:~/models/project.server
var require_project = __commonJS({
  "empty-module:~/models/project.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/projects.tsx
var React = __toESM(require_react());
var import_project = __toESM(require_project());
var import_session = __toESM(require_session());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Project() {
  const data = useLoaderData();
  const [projects, setProjects] = (0, import_react2.useState)(data);
  const nameRef = React.useRef(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: projects }, void 0, false, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 60,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-gray-50", children: "Nova pasta" }, void 0, false, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Nome: " }, void 0, false, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                autoFocus: true,
                ref: nameRef,
                id: "name",
                name: "name",
                className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/projects.tsx",
                lineNumber: 64,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
              children: "Salvar"
            },
            void 0,
            false,
            {
              fileName: "app/routes/projects.tsx",
              lineNumber: 75,
              columnNumber: 11
            },
            this
          ),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/notes", children: "Cencelar" }, void 0, false, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 81,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/projects.tsx",
      lineNumber: 49,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
export {
  Project as default
};
//# sourceMappingURL=/build/routes/projects-IYC5EABB.js.map
