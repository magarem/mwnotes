import {
  v4_default
} from "/build/_shared/chunk-OXVWDGG7.js";
import {
  createClient
} from "/build/_shared/chunk-UHWRWWT5.js";
import "/build/_shared/chunk-MZ4QRB3L.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3QIN6FEG.js";
import {
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// app/routes/upload.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var supabase = createClient("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
function Page() {
  const [file, setfile] = (0, import_react.useState)([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const filename = `${v4_default()}-${file.name}`;
    const { data, error } = await supabase.storage.from("files").upload(filename, file, {
      cacheControl: "3600",
      upsert: false
    });
    const filepath = data.path;
  };
  const handleFileSelected = (e) => {
    setfile(e.target.files[0]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", name: "image", onChange: handleFileSelected }, void 0, false, {
      fileName: "app/routes/upload.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/upload.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Upload image" }, void 0, false, {
      fileName: "app/routes/upload.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/upload.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
export {
  Page as default
};
//# sourceMappingURL=/build/routes/upload-JMLNS53R.js.map
