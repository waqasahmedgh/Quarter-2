"use client";
import React, { useState } from "react";

// Define types for squares
type SquareValue = "X" | "O" | null;

// Define type for the game board
type Board = SquareValue[];

const Square: React.FC<{ value: SquareValue; onClick: () => void }> = ({
  value,
  onClick,
}) => {
  return (
    <button
      className="bg-gray-200 w-16 h-16 border border-gray-400 flex justify-center items-center text-3xl font-bold"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const Board: React.FC<{ squares: Board; onClick: (i: number) => void }> = ({
  squares,
  onClick,
}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

const calculateWinner = (squares: Board): SquareValue | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Game: React.FC = () => {
  const [history, setHistory] = useState<Board[]>([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];

  console.log(current);

  const winner = calculateWinner(current);

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";

    setHistory([...newHistory, squares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">{status}</div>
      <Board squares={current} onClick={handleClick} />
      <div className="mt-4">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
