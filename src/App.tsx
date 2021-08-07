import { ThemeProvider, CssBaseline } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Home/Home";
import { useSelector } from "react-redux";
import { theme } from "./theme/index";
import Register from "./components/Register/Register";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Home /> */}
      <Register />
    </ThemeProvider>
  );
}

export default App;
