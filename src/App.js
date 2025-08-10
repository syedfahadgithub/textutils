import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

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
    },1500)
  }
  const toggleMode  = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mood enabled","Success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Dark mood disabled","Success")
    }
  }
  return (   
    <> 
    <Navbar title={"TextUtils"} mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm heading="Enter Text To Analyze" mode = {mode}/>
    </div>
    
    </>
    
  );
}

export default App;
