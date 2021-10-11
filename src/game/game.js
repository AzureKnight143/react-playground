import React, { useState } from "react";
import Board from "./board";
import "./game.scss";

export default function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move} className="mb-2">
        <button className="btn btn-primary" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) status = "Winner: " + winner;
  else status = "Next player: " + (xIsNext ? "X" : "O");

  function handleClick(i) {
    const historyStep = history.slice(0, stepNumber + 1);
    const current = historyStep[historyStep.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";

    setHistory(history.concat([{ squares: squares }]));
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="game">
      <h2>Game</h2>
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="mt-3">{status}</div>
      <ol className="ps-3">{moves}</ol>
    </div>
  );
}
