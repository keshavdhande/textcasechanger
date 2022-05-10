import { React, useState, props } from "react";

export default function Homepage(props) {
  const HandelUpClick = () => {
    let next = text.toUpperCase();
    settext(next);
  };
  const Lower = () => {
    let next = text.toLowerCase();
    settext(next);
  };
  const HandelOnChange = (event) => {
    console.log("it will handel on chage");
    settext(event.target.value);
  };
  const CLear = () => {
    settext(" ");
  };

  const [text, settext] = useState("");
  return (
    <div style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
      <div className="container my-2">
        <h1>Type something here</h1>
        <textarea
          placeholder="start typing here"
          onChange={HandelOnChange}
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "gray" : "wheat",
            color: props.mode === "dark" ? "white" : "#042743",
            border: "2px solid green",
          }}
          rows="8"
          value={text}
        ></textarea>
        <button className="btn btn-primary  m-3 " onClick={HandelUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary  m-3" onClick={Lower}>
          Lowercase
        </button>
        <button className="btn btn-primary  m-3 " onClick={CLear}>
          ClearText
        </button>
      </div>
      <div className="container my-2">
        <h2 style={{ color: props.mode === "dark" ? "red" : "blue" }}>this is you text summary</h2>
        <p>
          <b>Words: </b>
         {text.trim()}
          {text.split(" ").length - 1} , <b>Chararacters:</b> {text.length}
        </p>
        <p>
          <b> Number of time to read =</b>
          {0.008 * text.split(" ").length}
        </p>
        <h2 style={{ color: props.mode === "dark" ? "red" : "blue" }}>
          <b>Preview :</b>
        </h2>
        <p>
          {text.length > 0
            ? text
            : "enter something in textbox for preview here"}{" "}
        </p>
      </div>
    </div>
  );
}

