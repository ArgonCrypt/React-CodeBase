import React from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import Search from "./Search";
import Searchfooter from "./Searchfooter";
import Gallery from "./Gallery";
import Copypopup from "./Copypopup";
import Addbutton from "./Addbutton";
import Cardmenu from "./Cardmenu";
function App() {
  return (
    <>
      <Header></Header>
      <Subheader></Subheader>
      <Gallery></Gallery>
      <Cardmenu></Cardmenu>
      <Copypopup></Copypopup>
      <Addbutton></Addbutton>
    </>
  );
}

export default App;
