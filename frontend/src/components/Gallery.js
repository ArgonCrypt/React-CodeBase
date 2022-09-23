import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import "../css/gallery.css";
import eventBus from "../handlers/Eventbus";
import Card from "./Card";
import Search from "./Search";
import Searchfooter from "./Searchfooter";

function Gallery(props) {
  const [data, setData] = useState([]);
  let [cardTitleFilter, setFilter] = useState("");
  const searchChildReference = useRef();

  const updateSearchState = () => {
    const childState = searchChildReference.current.getSearchState();
    setFilter(childState);
  };

  let cards = data.map((card, i) => (
    <Card
      key={card._id}
      languages={card.languages}
      header={card.title}
      code={card.code}
    ></Card>
  ));
  let renderedCards = cards;

  function filterCards() {
    if (!(cardTitleFilter === "")) {
      renderedCards.filter((card) => card.title == cardTitleFilter);
    } else renderedCards = cards;
  }
  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });

    eventBus.on("searchInputChange", (data) => {
      console.log("change");
      //Set filter state
      setFilter(data.value);
      //Filter cards by filter state.
      filterCards();
      //console.log(cardTitleFilter);
    });

    return () => {
      eventBus.remove("searchInputChange");
    };
  });
  return (
    <>
      <Search ref={searchChildReference}></Search>
      <Searchfooter></Searchfooter>
      <div
        className="gallery"
        onClick={() => {
          updateSearchState();
        }}
      >
        {cards}
      </div>
    </>
  );
}
export default Gallery;
