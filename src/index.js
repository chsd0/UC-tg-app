import "./index.scss";
import { App } from "./app.jsx";
import { createRoot } from "react-dom/client";
import React from "react";

const container = document.querySelector('.root');
const root = createRoot(container);
root.render(<App/>);

