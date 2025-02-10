import React, { useState } from 'react';

export default function TextForm(props) {
    
    const [text, setText] = useState('');

    // Function to handle text change
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // Function to convert text to uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    // Function to convert text to lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    // Function to clear the text
    const handleclClick = () => {
        let newText = ' ';
        setText(newText);
    };

    // Function to copy the text 
    const handlecopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "Success")
    }

    return (
        <>
        <div className='container' style={{color:props.mode === 'dark'? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    id="myBox" 
                    rows="8" style={{backgroundColor:props.mode === 'dark'? '#13466e':'light', color:props.mode === 'dark'? 'white':'black'}}>
                </textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 mb-2" onClick={handleclClick}>
                Clear text
            </button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 mb-2" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 mb-2" onClick={handlecopy}>
                Copy text
            </button>

        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'? 'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    );
}
