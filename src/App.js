import "./styles.css";
import PrimarySearchAppBar from "./navbar.js";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Suggestion from "./suggestionsbar.js";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#FFFFFF"
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#FFFFFF"
    }
  }
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <PrimarySearchAppBar />
      </ThemeProvider>
      <Suggestion />
    </div>
  );
}
