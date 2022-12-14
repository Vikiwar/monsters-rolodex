import React from "react";
import CardContainer from "../card-container/card-container.components";
import "./card-list.styles.css";
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
