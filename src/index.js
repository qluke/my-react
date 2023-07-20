// 以下为react版本为18的写法
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 导入浏览器路由 
  // 围绕 app component，用非 html 组件包装它
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
