import React from "react";
import "../css/addbutton.css";
import eventBus from "../handlers/Eventbus";
function Addbutton() {
  return (
    <button
      className="addbutton"
      onClick={() => {
        eventBus.dispatch("openMenu");
      }}
    >
      +
    </button>
  );
}
export default Addbutton;
