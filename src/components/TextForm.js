import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase" , "success");
    }
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase" , "success");
    }
    const handleClearClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert("All text has been cleared" , "danger");
    }
    const handleCopyClick = () => {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("The text has been copied to clipboard" , "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    //text = "new Text";// wrong way to change the state
    //setText = "new Text";// Correct way to change the state
  return (
    <>
    <div className = "container"  style={{color:props.mode ==='dark' ? 'white' : 'black' }}>
       <h1>{props.heading}</h1>
    
        <div className="mb-3">
           
            <textarea className="form-control" value={text} onChange ={handleOnChange} style={{backgroundColor: props.mode ==='dark' ? '#13466e':'white',color:props.mode === 'dark' ? 'white':'#042743' }}id="myBox" rows="8"></textarea>
        </div>
        
        <button className= "btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className= "btn btn-primary mx-1 my-1" onClick={handleLoClick}
        >Convert to LowerCase</button>
        <button className = "btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button className = "btn btn-primary mx-1 my-1" onClick=
        {handleCopyClick}>Copy</button>
                   
<div className = "container my-3">
      <h2>your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
        
    </div>
    
    </>
    
  )
}
