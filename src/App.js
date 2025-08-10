import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showalert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },1000)
  }
  const toggleMode  = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Darkmood Enabled","Success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Darkmood Disabled","Success")
    }
  }
  return (   
    <> 
    <Router>
    <Navbar title={"TextUtils"} mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} mode = {mode}/>
          <Route exact path="/" element={<TextForm showalert={showalert} heading="TextUtils-Enter text to perform some operation." mode = {mode}/>}/>
        </Routes>
    </div>
    </Router>
    </> 
  );
}

export default App;
