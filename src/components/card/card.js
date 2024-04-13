import React from "react";
import styles from "./card.module.css";

function Card({ card, removeCard, moveCard }) {
  return (
    <div className={styles.box}>
      {card.item}
      {card.responsible}
      <button onClick={() => removeCard(card)}>Remove</button>
      
      <select onChange={(e) => moveCard(card, e.target.value)}>
        <option value="backlog">Backlog</option>
        <option value="doing">Doing</option>
        <option value="review">Review</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}

export default Card;
