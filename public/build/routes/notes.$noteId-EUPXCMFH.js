import {
  require_note
} from "/build/_shared/chunk-BOCVWV7G.js";
import {
  require_session
} from "/build/_shared/chunk-UUXYXIFE.js";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useNavigate,
  useRouteError
} from "/build/_shared/chunk-OWPABCHM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3QIN6FEG.js";
import {
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// app/routes/notes.$noteId.tsx
var import_note = __toESM(require_note());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NoteDetailsPage() {
  const data = useLoaderData();
  const CDNURL = "";
  let navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-dark text-slate-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold", children: data.note.title }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: data.note.body.replace(/\n/g, "<br />") } }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-6", children: data.note.img && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `${data.note.img}`, alt: "dd", style: { width: "100px" } }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 56,
      columnNumber: 43
    }, this) }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => navigate("/notes/edit/" + data.note.id),
          className: "rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600 focus:bg-blue-400",
          children: "Edit"
        },
        void 0,
        false,
        {
          fileName: "app/routes/notes.$noteId.tsx",
          lineNumber: 59,
          columnNumber: 9
        },
        this
      ),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded bg-red-500  px-4 py-1 text-white hover:bg-red-800 focus:bg-blue-400",
          children: "Delete"
        },
        void 0,
        false,
        {
          fileName: "app/routes/notes.$noteId.tsx",
          lineNumber: 62,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  const error = useRouteError();
  if (error instanceof Error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      "An unexpected error occurred: ",
      error.message
    ] }, void 0, true, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 77,
      columnNumber: 12
    }, this);
  }
  if (!isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Unknown Error" }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 81,
      columnNumber: 12
    }, this);
  }
  if (error.status === 404) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Note not found" }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 85,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, true, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  NoteDetailsPage as default
};
//# sourceMappingURL=/build/routes/notes.$noteId-EUPXCMFH.js.map
