import React from "react";
import styles from "./column.module.css";
import Card from "../card/card.js";

function Column({ columnName, cards, addCard, removeCard, moveCard }) {
  return (
    <div>
      <div className={styles.card}>
        {cards.map((card) => (
          <div key={card.cardId}>
            <Card card={card} removeCard={removeCard} moveCard={moveCard} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => addCard(columnName)} >+ Add a card</button>
      </div>
    </div>
  );
}

export default Column;

