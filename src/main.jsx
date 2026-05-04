import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Buffer } from "buffer";
window.Buffer = Buffer;
import "./index.css";
import App from "./App.jsx";
import "98.css/dist/98.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
