import React, { useState } from "react";
import './App.css';
import Board from "./components/Board/Board";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

const App = () => {

  const [turn, setTurn] = useState('X');
  const [winningSquares, setWinningSquares] = useState([]);
  const [squares, setSquares] = useState(Array(9).fill(null)); //fill quiere decir lo inicializamos
  const [score, setScore] = useState({ X: 0, O: 0 });
  console.log(winningSquares)
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  const checkForWinner = newSquare => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (newSquare[a] && newSquare[a] === newSquare[b] && newSquare[a] === newSquare[c]) {
        endGame(newSquare[a], winningPositions[i]);
        if (score.O > 0) {
          alert(`Ganó ${turn}`)
        } else {
          alert(`Ganó ${turn}`)
        }
      }
    }
    if (!newSquare.includes(null)) {
      endGame(null, Array.from(Array(10).keys()))
      return alert('No gano nadie')
    }
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  const handleClick = square => {
    let newSquare = [...squares];
    newSquare.splice(square, 1, turn);
    setSquares(newSquare);
    checkForWinner(newSquare);
  };

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  }

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if (result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1
      })
    }
    setWinningSquares(winningPositions);
    setTimeout(reset, 4000)
  };

  return (
    <div className="container">
      <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick} />
      <ScoreBoard scoreO={score.O} scoreX={score.X} />

    </div>
  );
}

export default App;
