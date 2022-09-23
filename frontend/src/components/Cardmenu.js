import React, { useEffect, useState, useRef } from "react";
import eventBus from "../handlers/Eventbus";
import axios from "axios";
import Blur from "./Blur";
import "../css/cardmenu.css";
function Cardmenu() {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState("");
  const [header, setHeader] = useState("");
  const [code, setCode] = useState("");
  const inputReference = useRef(null);

  useEffect(() => {
    //Listens for openmenu event,dispatched by addbutton.
    //If event triggered,invert the current visibility of card menu.
    eventBus.on("openMenu", (data) => {
      setVisible(!visible);
    });
    //If cardmenu is visible,set the focus on first input.
  });
  function handleSubmit() {
    //Handles the submit(updating states)
    clearState();
    //Make post request.
    axios
      .post("http://localhost:5000/cards", {
        languages: language,
        title: header,
        code: code,
      })
      .then((req, res) => {
        clearState();
        setVisible(false);
        console.log(res);
      });
  }
  function clearState() {
    //Clears the states.
    setLanguage("");
    setHeader("");
    setCode("");
  }
  function updateInputValue(event, typeObject) {
    //Keeps the component controlled(sets the states of cardmenu to the input values)
    switch (typeObject.type) {
      case "language":
        setLanguage(event.target.value);
        break;
      case "header":
        setHeader(event.target.value);
        break;
      case "code":
        setCode(event.target.value);
    }
  }
  //Ternary operator to determine whether or not to make cardmenu visible.
  const renderClassname = visible ? "cardmenu visible" : "cardmenu";
  return (
    <div className={renderClassname}>
      <h1>Languages:</h1>
      <input
        spellCheck={false}
        value={language}
        ref={inputReference}
        onChange={(e) => {
          updateInputValue(e, { type: "language" });
          console.log("ree");
        }}
      ></input>
      <h1>Title:</h1>
      <input
        spellCheck={false}
        value={header}
        onChange={(e) => {
          updateInputValue(e, { type: "header" });
        }}
      ></input>
      <h1>Code:</h1>
      <input
        spellCheck={false}
        value={code}
        onChange={(e) => {
          updateInputValue(e, { type: "code" });
        }}
      ></input>
      <div>
        <button
          className="cardmenuButton"
          type={"button"}
          onMouseDown={(e) => {
            handleSubmit();
          }}
        >
          Create card
        </button>
      </div>
    </div>
  );
}
export default Cardmenu;
