import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode  = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <> 
    <Navbar title={"TextUtils"} mode = {mode} toggleMode = {toggleMode}/>
    <div className="container">
    <TextForm heading="Enter Text To Analyze" mode = {mode}/>
    </div>
    </>
    
  );
}

export default App;
