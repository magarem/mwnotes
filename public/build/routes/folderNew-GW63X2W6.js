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
  Link
} from "/build/_shared/chunk-OWPABCHM.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3QIN6FEG.js";
import {
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// app/routes/folderNew.tsx
var React = __toESM(require_react());
var import_note = __toESM(require_note());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var supabase = createClient("https://lpbqbqcmlspixeiikhcb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk");
function NewNotePage() {
  const folderNameRef = React.useRef(null);
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-gray-50", children: "Nova pasta" }, void 0, false, {
            fileName: "app/routes/folderNew.tsx",
            lineNumber: 82,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1  text-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Nome: " }, void 0, false, {
              fileName: "app/routes/folderNew.tsx",
              lineNumber: 84,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                autoFocus: true,
                ref: folderNameRef,
                id: "folderName",
                name: "folderName",
                className: "w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/folderNew.tsx",
                lineNumber: 85,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/folderNew.tsx",
            lineNumber: 83,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/folderNew.tsx",
          lineNumber: 81,
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
              fileName: "app/routes/folderNew.tsx",
              lineNumber: 96,
              columnNumber: 11
            },
            this
          ),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/notes", children: "Cencelar" }, void 0, false, {
            fileName: "app/routes/folderNew.tsx",
            lineNumber: 102,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/folderNew.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/folderNew.tsx",
      lineNumber: 71,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/folderNew.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
export {
  NewNotePage as default
};
//# sourceMappingURL=/build/routes/folderNew-GW63X2W6.js.map
