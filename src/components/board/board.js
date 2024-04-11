import React from 'react';
import styles from './board.module.css';

function Board() {
  return (
    <div className={styles.board}>
      <div className={styles.box}>
        <h2>Backlog</h2>
      </div>
      <div className={styles.box}>
        <h2>Doing</h2>
      </div>
      <div className={styles.box}>
        <h2>Review</h2>
      </div>
      <div className={styles.box}>
        <h2>Done</h2>
      </div>

    </div>
  );
}

export default Board;
