import React from 'react';
import styles from './board.module.css';

function Board() {
  return (
    <div className={styles.board}>
      <div className={styles.box}>
        <div className={styles.boxHeader} id={styles.backlogbox}>Backlog</div>
      </div>
      <div className={styles.box}>
        <div className={styles.boxHeader} id={styles.doingbox}>Doing</div>
      </div>
      <div className={styles.box}>
        <div className={styles.boxHeader} id={styles.reviewbox}>Review</div>
      </div>
      <div className={styles.box}>
        <div className={styles.boxHeader} id={styles.donebox}>Done</div>
      </div>
    </div>
  );
}

export default Board;

