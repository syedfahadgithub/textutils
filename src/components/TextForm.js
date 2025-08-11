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
  //time to read
  let readingTime = wordCount === 0 ? 0 : (0.008 * wordCount).toFixed(2);
  return ( 
    <>
    <div className="maincontent">
    <div className="container" style = {{color:props.mode==="light"?"black":"white"}}>
      <h1>{props.heading}</h1>
      <div className="mb-5"><textarea class="form-control" id="mybox" rows="9" value={text} onChange={chnghandle} style = {{backgroundColor:props.mode==="light"?"white":"#042743", color:props.mode==="light"?"black":"white"}}></textarea>
      </div>
      <button disabled={text.length===0} onClick={handleUp} className="btn btn-primary mx-1 my-1">Convert To Upper Case</button>
      <button disabled={text.length===0} onClick={handleLow} className="btn btn-primary mx-1 my-1">Convert To Lower Case</button>
      <button disabled={text.length===0} onClick={handleclear} className="btn btn-primary mx-1 my-1">Clear Text</button>
      <button disabled={text.length===0} onClick={handlespaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
    </div>
    <div className="container" style = {{color:props.mode==="light"?"black":"white"}}>
        <h2 className="my-3">Your Text Summary</h2>
        <p>{wordCount}Words and {text.length} Characters.</p>
        <p>Read in {readingTime} minutes.</p> 
        <h2>Preview text here</h2>
        <p>{text.length > 0 ? text:"Nothing to preview!"}</p>
    </div> 
    </div>
  </>  
  );
};
export default TextForm;
 