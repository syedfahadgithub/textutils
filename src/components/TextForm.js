"use client"
import React, { useState } from "react";
const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUp = ()=>{
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  const handleLow = ()=>{
    let newtext = text.toLowerCase()
    setText(newtext)
  }
  const chnghandle = (event)=>{
    setText(event.target.value)
  }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-5"><textarea class="form-control" id="mybox" rows="9" value={text} onChange={chnghandle}></textarea>
      </div>
      <button onClick={handleUp} className="primarybtn mx-3">Convert To Upper Case</button>
      <button onClick={handleLow} className="primarybtn">Convert To Lower Case</button>
    </div>
    <h2 className="my-3">Your Text Summary</h2>
    <p>{text.split(" ").length} and {text.length} characters.</p>
  </>  
  );
};
export default TextForm;
 