import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Config/Mui-config.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </BrowserRouter>
);
