import React, { useEffect, useState } from "react";
import "../css/copypopup.css";
import eventBus from "../handlers/Eventbus";
function Copypopup(props) {
  const [classRender, setClass] = useState("");
  useEffect(() => {
    eventBus.on("copyPopup", (data) => {
      setClass("visible");
      setTimeout(() => {
        setClass("");
      }, 1000);
    });
  });
  return <div className={"copypopup " + classRender}>Copied!</div>;
}
export default Copypopup;
