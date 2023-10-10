import React, { useState } from 'react';
import './Multiplayer.css'; // Make sure to import the correct CSS file
import { Link } from 'react-router-dom';

const defaultSquares = () => (new Array(9)).fill(null);

const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function TicTacToe() {
  const [squares, setSquares] = useState(defaultSquares());
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (squares[index] || winner) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const currentWinner = calculateWinner(newSquares);
    if (currentWinner) {
      setWinner(currentWinner);
    }
  };

  const calculateWinner = (squares) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setSquares(defaultSquares());
    setXIsNext(true);
    setWinner(null);
  };

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (squares.every((square) => square !== null)) {
      return "It's a Draw!";
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  return (
    <main>
      <h1 className='header'>TIC-TAC-TOE</h1>
      <div className='bks'>
      <div className='bks'><Link style={{textDecoration:'none',color:'white',fontSize:'1rem',backgroundColor:'black',padding:'5px 3px',border:'1px solid #ffffff'}} to='/home'> <i class="fa-solid fa-arrow-left" ></i> Back</Link></div>
      </div>
      <div className="board">
        {squares.map((square, index) => (
          <div key={index} className="square" onClick={() => handleClick(index)}>
            {square}
          </div>
        ))}
      </div>
      <div className="status">{getStatus()}</div>
      {/* {(winner || squares.every((square) => square !== null)) && (
        <div className={`result ${winner === 'X' ? 'green' : 'red'}`}>
          {winner ? `${winner} Won!` : "It's a Draw!"}
        </div>
      )} */}
      <div className='reset'>
        <button className='btn' onClick={handleReset}>Reset</button>
      </div>
    </main>
  );
}

export default TicTacToe;
