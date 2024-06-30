import { React, useState } from "react";
import { GameResult } from "./GameLogic";
import "./GameTable.css";

function GameTable() {
  let sign = "";
  //let tableArray = [100, 101, 102, 103, 104, 105, 106, 107, 108];
  const [player, setPlayer] = useState("Player 1");
  const handleClick = (id) => {
    if (player == "Player 1") {
      document.getElementById(`${id}`).innerHTML = "X";
      console.log(player);
      setPlayer("Player 2");
    } else {
      document.getElementById(`${id}`).innerHTML = "0";
      console.log(player);
      setPlayer("Player 1");
    }
  };
  return (
    <>
      <div className="GameTable">
        <div onClick={() => handleClick(0)} id="0" className="grid-item"></div>
        <div onClick={() => handleClick(1)} id="1" className="grid-item"></div>
        <div onClick={() => handleClick(2)} id="2" className="grid-item"></div>
        <div onClick={() => handleClick(3)} id="3" className="grid-item"></div>
        <div onClick={() => handleClick(4)} id="4" className="grid-item"></div>
        <div onClick={() => handleClick(5)} id="5" className="grid-item"></div>
        <div onClick={() => handleClick(6)} id="6" className="grid-item"></div>
        <div onClick={() => handleClick(7)} id="7" className="grid-item"></div>
        <div onClick={() => handleClick(8)} id="8" className="grid-item"></div>
      </div>
      ;
    </>
  );
}

export default GameTable;
