import {
  useOptionalUser
} from "/build/_shared/chunk-QCJELAVJ.js";
import {
  Link
} from "/build/_shared/chunk-OWPABCHM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3QIN6FEG.js";
import {
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [{ title: "Remix Notes" }];
function Index() {
  const user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "bg-dark relative min-h-screen sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative px-4 pb-8 pt-5 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-15", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block uppercase text-yellow-500 drop-shadow-md", children: "MW Notes2" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: "/notes",
          className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
          children: [
            "Notas de ",
            user.email
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 35,
          columnNumber: 19
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/join",
            className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
            children: "Inscrever"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 43,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/login",
            className: "flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600",
            children: "Entrar"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 49,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 42,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-Y2LYZVNS.js.map
