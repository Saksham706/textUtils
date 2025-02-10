import React from "react";

export default function About(props) {

   
    let myStyle = {
      color: props.mode ==='dark'? 'white': '#042743',
      backgroundColor:props.mode ==='dark'? 'rgb(36 74 104)': 'white',
      border:'2px solid',
      borderColor: props.mode ==='dark'? 'white': '#042743'
    }

    
  return (
    <div classNameName="container" style={{ color: props.mode ==='dark'? 'white': '#042743'}}>
        <h1>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             TextUtils gives you a way to analyze your text qucikly and efficiently. Be it word cout, character count.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provide instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with wod/ characterr limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter softwar works in any web browers such as chrome, firwfox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel documents, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
