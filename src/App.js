import "./App.css";
import { React, useState, props } from "react";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";

function App() {
  const [mode, setmode] = useState("light");
  const togelmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "textutils dark mode enabled";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "textutils light mode enabled";
    }
  };
  return (
    <div>
      <Navbar mode={mode} togelmode={togelmode} />,
      <Homepage mode={mode} togelmode={togelmode} />
    </div>
  );
}

export default App;
