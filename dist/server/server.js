import http from "http";
import * as jsxRuntime from "react/jsx-runtime";
import express from "express";
import { renderToString } from "react-dom/server";
import { useState } from "react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const reactLogo = "/assets/react-35ef61ed.svg";
const App$1 = "";
function App() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "App", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: "/assets/vite.svg", className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://reactjs.org", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setCount((count2) => count2 + 1), children: [
        "count is ",
        count
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use("/assets", express.static(path.resolve(__dirname, "../client/assets")));
app.get("/", (req, res) => {
  try {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../client/index.html"),
      {
        encoding: "utf8"
      }
    );
    const renderedHtml = renderToString(/* @__PURE__ */ jsx(App, {}));
    html.replace("<!--ssr-outlet-->", renderedHtml);
    console.log(html);
    console.log(renderedHtml);
    res.status(200).send(html);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("server error");
  }
});
const server = http.createServer(app);
server.listen(process.env.PORT || 3e3, () => {
  console.log("server is perfect up");
});
