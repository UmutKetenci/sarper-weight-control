import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { sarperLegend } from "./constants/stringConstants";
import { createTheme } from "@mui/material";

function App() {
  return (
    <div className="App">
      <h4>{sarperLegend}</h4>
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
