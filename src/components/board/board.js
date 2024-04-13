import React, { useState } from "react";
import styles from "./board.module.css";
import initialCards from "../column/initialCards.js";
import Column from "../column/column.js";

function Board() {
  const [cards, setCards] = useState(initialCards);

  function addCard(columnAssigned) {
    const newCard = {
      cardId: cards.length + 1,
      columnAssigned,
      item: "New task",
      responsible: "Cassian",
    };
    setCards([...cards, newCard]);
  }

  function removeCard(cardToRemove) {
    setCards(cards.filter((card) => card.cardId !== cardToRemove.cardId));
  }

  function moveCard(cardToMove, columnToAssign) {
    setCards((cards) => [
      ...cards.filter((card) => card !== cardToMove),
      {
        ...cardToMove,
        columnAssigned: columnToAssign,
      },
    ]);
  }

  return (
    <div className={styles.board}>
      <div className={styles.box}>
        <div className={styles.boxHeader} id={styles.backlogbox}>
          Backlog
        </div>
        <Column
          columnName="backlog"
          cards={cards.filter((card) => card.columnAssigned === "backlog")}
          addCard={addCard}
          removeCard={removeCard}
          moveCard={moveCard}
        />
      </div>
      <div className={styles.box}>
        <div className={styles.boxHeader} id={styles.doingbox}>
          Doing
        </div>
        <Column
          columnName="doing"
          cards={cards.filter((card) => card.columnAssigned === "doing")}
          addCard={addCard}
          removeCard={removeCard}
          moveCard={moveCard}
        />
      </div>
      <div className={styles.box}>
        <div className={styles.boxHeader} id={styles.reviewbox}>
          Review
        </div>
        <Column
          columnName="review"
          cards={cards.filter((card) => card.columnAssigned === "review")}
          addCard={addCard}
          removeCard={removeCard}
          moveCard={moveCard}
        />
      </div>
      <div className={styles.box}>
        <div className={styles.boxHeader} id={styles.donebox}>
          Done
        </div>
        <Column
          columnName="done"
          cards={cards.filter((card) => card.columnAssigned === "done")}
          addCard={addCard}
          removeCard={removeCard}
          moveCard={moveCard}
        />
      </div>
    </div>
  );
}

export default Board;
