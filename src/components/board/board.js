import React, { useState } from "react";
import styles from "./board.module.css";
import initialCards from "../column/initialCards.js";
import Column from "../column/column.js";

let createCardId = initialCards.length;

function Board() {
  const [cardsForBacklog, setCardsForBacklog] = useState(
    initialCards.filter(
      (initialCard) => initialCard.columnAssigned === "backlog"
    )
  );
  const [cardsForDoing, setCardsForDoing] = useState(
    initialCards.filter((initialCard) => initialCard.columnAssigned === "doing")
  );
  const [cardsForReview, setCardsForReview] = useState(
    initialCards.filter(
      (initialCard) => initialCard.columnAssigned === "review"
    )
  );
  const [cardsForDone, setCardsForDone] = useState(
    initialCards.filter((initialCard) => initialCard.columnAssigned === "done")
  );

  function addCard(columnAssigned) {
    switch (columnAssigned) {
      case "backlog":
        setCardsForBacklog((cardsForBacklog) => [
          ...cardsForBacklog,
          {
            cardId: createCardId++,
            columnAssigned: "backlog",
            item: "New task",
            responsible: "Cassian",
          },
        ]);
        break;
      case "doing":
        setCardsForDoing((cardsForDoing) => [
          ...cardsForDoing,
          {
            cardId: createCardId++,
            columnAssigned: "doing",
            item: "New task",
            responsible: "Cassian",
          },
        ]);
        break;
      case "review":
        setCardsForReview((cardsForReview) => [
          ...cardsForReview,
          {
            cardId: createCardId++,
            columnAssigned: "review",
            item: "New task",
            responsible: "Cassian",
          },
        ]);
        break;
      case "done":
        setCardsForDone((cardsForDone) => [
          ...cardsForDone,
          {
            cardId: createCardId++,
            columnAssigned: "done",
            item: "New task",
            responsible: "Cassian",
          },
        ]);
        break;
    }
  }

  function removeCard(cardToRemove) {
    switch (cardToRemove.columnAssigned) {
      case "backlog":
        setCardsForBacklog(
          cardsForBacklog.filter((card) => card.cardId !== cardToRemove.cardId)
        );
        break;
      case "doing":
        setCardsForDoing(
          cardsForDoing.filter((card) => card.cardId !== cardToRemove.cardId)
        );
        break;
      case "review":
        setCardsForReview(
          cardsForReview.filter((card) => card.cardId !== cardToRemove.cardId)
        );
        break;
      case "done":
        setCardsForDone(
          cardsForDone.filter((card) => card.cardId !== cardToRemove.cardId)
        );
        break;
    }
  }

  function moveCard(e, card) {
    removeCard(card); // Remove the card from its current column
  
    const destination = e.target.value;
  
    switch (destination) {
      case "backlog":
        setCardsForBacklog([...cardsForBacklog, card]);
        break;
      case "doing":
        setCardsForDoing([...cardsForDoing, card]);
        break;
      case "review":
        setCardsForReview([...cardsForReview, card]);
        break;
      case "done":
        setCardsForDone([...cardsForDone, card]);
        break;
      default:
        // Handle any other cases
        break;
    }
  }
  

    return (
      <div className={styles.board}>
        <div className={styles.box}>
          <div className={styles.boxHeader} id={styles.backlogbox}>
            Backlog
          </div>
          <Column
            columnName="backlog"
            cards={cardsForBacklog}
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
            cards={cardsForDoing}
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
            cards={cardsForReview}
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
            cards={cardsForDone}
            addCard={addCard}
            removeCard={removeCard}
            moveCard={moveCard}
          />
        </div>
      </div>
    );
  }


export default Board;
