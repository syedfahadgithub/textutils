"use client"
import React, { useState } from "react";
const TextForm = (props) => {
  const [text, setText] = useState("");
  //change to upper
  const handleUp = ()=>{
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  //chng to lower 
  const handleLow = ()=>{
    let newtext = text.toLowerCase()
    setText(newtext)
  }
  //clear the text box
  const handleclear = ()=>{
    let newtext = ""
    setText(newtext)
  }
  //remove extra spaces
  const handlespaces = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
  }
  //on each chng event perform
  const chnghandle = (event)=>{
    setText(event.target.value)
  }
  //count words
  let wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  return ( 
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-5"><textarea class="form-control" id="mybox" rows="9" value={text} onChange={chnghandle}></textarea>
      </div>
      <button onClick={handleUp} className="btn btn-outline-primary mx-3">Convert To Upper Case</button>
      <button onClick={handleLow} className="btn btn-outline-primary">Convert To Lower Case</button>
      <button onClick={handleclear} className="btn btn-outline-primary mx-3">Clear Text</button>
      <button onClick={handlespaces} className="btn btn-outline-primary mx-3">Remove Extra Spaces</button>
    </div>
    <div className="container">
        <h2 className="my-3">Your Text Summary</h2>
        <p>{wordCount}Words and {text.length} Characters.</p>
        <p>Read in {(0.008 * text.split(" ").length).toFixed(2)} minutes.</p> 
        <h2>Preview text here</h2>
        <p>{text}</p>
    </div> 
  </>  
  );
};
export default TextForm;
 