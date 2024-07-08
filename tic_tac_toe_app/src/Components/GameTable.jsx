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

  const [playerName, setPlayerName] = useState(
    () => JSON.parse(localStorage.getItem("playerName")) || []
  );

  const [inputValue, setInputValue] = useState("");

  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("");

  useEffect(() => {
    const savedPlayer = localStorage.getItem("player");
    const savedArray = JSON.parse(localStorage.getItem("array"));
    const savedPlayerNames = JSON.parse(localStorage.getItem("playerName"));
    const savedPlayer1Name = localStorage.getItem("player1Name");
    const savedPlayer2Name = localStorage.getItem("player2Name");
    if (savedPlayer && savedArray) {
      setPlayer(savedPlayer);
      setArray(savedArray);
    }
    if (savedPlayerNames) {
      setPlayerName(savedPlayerNames);
    }

    if (savedPlayer1Name) {
      setPlayer1Name(savedPlayer1Name);
    }

    if (savedPlayer2Name) {
      setPlayer2Name(savedPlayer2Name);
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
        setCurrentPlayer(player1Name);
        localStorage.setItem("array", JSON.stringify(newArray));
        localStorage.setItem("player", player);
      } else {
        newArray[id] = "0";
        setArray(newArray);
        setPlayer("Player 1");
        setCurrentPlayer(player2Name);
        localStorage.setItem("array", JSON.stringify(newArray));
        localStorage.setItem("player", player);
      }
    }
  };

  const reset = () => {
    const initialArray = [100, 101, 102, 103, 104, 105, 106, 107, 108];
    setArray(initialArray);
    setPlayer("Player 1");
    setCurrentPlayer("");
    for (let i = 0; i < 9; i++) {
      document.getElementById(`${i}`).innerHTML = "";
    }
    localStorage.setItem("array", JSON.stringify(initialArray));
    localStorage.setItem("player", player);
    localStorage.setItem("player1Name", currentPlayer);
    localStorage.setItem("player2Name", currentPlayer);
  };

  const addPlayerName = () => {
    const updatedPlayerName = [...playerName, inputValue];
    setPlayerName(updatedPlayerName);
    setInputValue("");
    localStorage.setItem("playerName", JSON.stringify(updatedPlayerName));
  };

  const selectPlayer1 = (name) => {
    localStorage.setItem("player1Name", name);
  };
  const selectPlayer2 = (name) => {
    localStorage.setItem("player2Name", name);
  };

  return (
    <div className="page">
      <div className="leftSide">
        <header className="header">
          <h2 className="PlayerNames">Este randul lui: {currentPlayer}</h2>
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
        <div className="gameTableFooter">
          <button onClick={reset} className="resetButton">
            Reset
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addPlayerName();
            }}
          >
            <h3 className="inputTitle">Adauga nume:</h3>
            <input
              type="text"
              id="input"
              className="addName"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="addButton">
              Adauga
            </button>
          </form>
        </div>
      </div>
      <div className="middleSide">
        <div className="dropdown">
          <button className="dropbtn">Select Player 1</button>
          <div className="dropdown-content">
            <h3>
              {playerName.map((name, index) => (
                <button
                  className="dropdownNames"
                  key={index}
                  value={name}
                  onClick={() => selectPlayer1(name)}
                >
                  {name}
                </button>
              ))}
            </h3>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Select Player 2</button>
          <div className="dropdown-content">
            <h3>
              {playerName.map((name, index) => (
                <button
                  className="dropdownNames"
                  key={index}
                  value={name}
                  onClick={() => selectPlayer2(name)}
                >
                  {name}
                </button>
              ))}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameTable;
