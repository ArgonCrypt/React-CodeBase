import React from "react";
import "../css/languageinput.css";
function LanguageInput() {
  return (
    <div className="languageInput">
      <input
        type={"radio"}
        name={"chosenLanguage"}
        id={"HTML"}
        className="languageIcon"
      ></input>
      <input
        type={"radio"}
        name={"chosenLanguage"}
        id={"CSS"}
        className="languageIcon"
      ></input>
      <input
        type={"radio"}
        name={"chosenLanguage"}
        id={"JS"}
        className="languageIcon"
      ></input>
      <input
        type={"radio"}
        name={"chosenLanguage"}
        id={"C#"}
        className="languageIcon"
      ></input>
    </div>
  );
}
export default LanguageInput;
