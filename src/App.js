import React from 'react';
import './App.css';
import Board from './components/board/board.js';

import logo from './logo.svg';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>KANBAN</p>
      </header>
      <div className="App-body">
        <Board />
      </div>
    </div>
  );
}

export default App;

