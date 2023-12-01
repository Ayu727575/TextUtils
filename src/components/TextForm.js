import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text area", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra space", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //text = "new_text"; wrong way of update state var
  //setText("new text") right way of update state var
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#1e1b39" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="formbtn btn btn-primary"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          To uppercase
        </button>
        <button
          className="formbtn btn btn-primary mx-2"
          onClick={handleLoClick}
          disabled={text.length === 0}
        >
          To lowercase
        </button>
        <button
          className="formbtn btn btn-primary mx-2"
          onClick={handleClearClick}
          disabled={text.length === 0}
        >
          Clear the text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="formbtn btn btn-primary mx-2"
          disabled={text.length === 0}
        >
          Speak
        </button>
        <button
          className="formbtn btn btn-primary mx-2"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="formbtn btn btn-primary mx-2"
          onClick={removeExtraSpace}
          disabled={text.length === 0}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        {/* {setInterval(() => {
          document.body.style.backgroundColor = "pink";
        }, 2000)}
        {setInterval(() => {
          document.body.style.backgroundColor = "red";
        }, 1500)} */}
        <p>
          {text.length > 0 ? text.trim().split(/\s+/).length : 0} Words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * (text.length > 0 ? text.trim().split(" ").length : 0)}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
