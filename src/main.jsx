import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./config/global.js";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/mui-theme.js";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>
);
