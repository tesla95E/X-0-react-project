import React, { useState, useEffect } from "react";
import GameResult from "./GameLogic";
import "./GameTable.css";

function GameTable() {
  const [array, setArray] = useState(
    () =>
      JSON.parse(localStorage.getItem("array")) || [
        100, 101, 102, 103, 104, 105, 106, 107, 108,
      ]
  );
  const [player, setPlayer] = useState(
    () => localStorage.getItem("player") || "Player 1"
  );

  useEffect(() => {
    const savedPlayer = localStorage.getItem("player");
    const savedArray = JSON.parse(localStorage.getItem("array"));
    if (savedPlayer && savedArray) {
      setPlayer(savedPlayer);
      setArray(savedArray);
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < array.length; i++) {
      const element = document.getElementById(`${i}`);
      if (array[i] === "X" || array[i] === "0") {
        element.innerHTML = array[i];
      } else {
        element.innerHTML = "";
      }
    }
  }, [array, player]);

  const handleClick = (id) => {
    if (array[id] !== "X" && array[id] !== "0") {
      const newArray = [...array];
      if (player === "Player 1") {
        newArray[id] = "X";
        setArray(newArray);
        setPlayer("Player 2");
        localStorage.setItem("array", JSON.stringify(newArray));
        localStorage.setItem("player", player);
      } else {
        newArray[id] = "0";
        setArray(newArray);
        setPlayer("Player 1");
        localStorage.setItem("array", JSON.stringify(newArray));
        localStorage.setItem("player", player);
      }
    }
  };

  const reset = () => {
    const initialArray = [100, 101, 102, 103, 104, 105, 106, 107, 108];
    setArray(initialArray);
    setPlayer("Player 1");
    for (let i = 0; i < 9; i++) {
      document.getElementById(`${i}`).innerHTML = "";
    }
    localStorage.setItem("array", JSON.stringify(initialArray));
    localStorage.setItem("player", player);
  };

  return (
    <div className="page">
      <div className="leftSide">
        <header className="header">
          <h2 className="PlayerNames">Este randul lui: {player}</h2>
          <h2 className="winner">{GameResult(array)}</h2>
        </header>
        <div className="GameTable">
          <div
            onClick={() => handleClick(0)}
            id="0"
            className="grid-item"
          ></div>
          <div
            onClick={() => handleClick(1)}
            id="1"
            className="grid-item"
          ></div>
          <div
            onClick={() => handleClick(2)}
            id="2"
            className="grid-item"
          ></div>
          <div
            onClick={() => handleClick(3)}
            id="3"
            className="grid-item"
          ></div>
          <div
            onClick={() => handleClick(4)}
            id="4"
            className="grid-item"
          ></div>
          <div
            onClick={() => handleClick(5)}
            id="5"
            className="grid-item"
          ></div>
          <div
            onClick={() => handleClick(6)}
            id="6"
            className="grid-item"
          ></div>
          <div
            onClick={() => handleClick(7)}
            id="7"
            className="grid-item"
          ></div>
          <div
            onClick={() => handleClick(8)}
            id="8"
            className="grid-item"
          ></div>
        </div>
        <button onClick={reset} className="resetButton">
          Reset
        </button>
      </div>
      <div className="middleSide">
        <div className="dropdown">
          <button className="dropbtn">Select Player 1</button>
          <div className="dropdown-content">
            <h3>andy</h3>
            <h3>andy</h3>
            <h3>andy</h3>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Select Player 2</button>
          <div className="dropdown-content">
            <h3>andy</h3>
            <h3>andy</h3>
            <h3>andy</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameTable;
