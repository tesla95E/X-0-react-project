export function GameResult(array, player1Name, player2Name) {
  if (array[0] == array[1] && array[0] == array[2]) {
    if (array[0] == "X") {
      return `A castigat ${player1Name}`;
    } else {
      return `A castigat ${player2Name}`;
    }
  } else if (array[3] == array[4] && array[3] == array[5]) {
    if (array[3] == "X") {
      return `A castigat ${player1Name}`;
    } else {
      return `A castigat ${player2Name}`;
    }
  } else if (array[6] == array[7] && array[6] == array[8]) {
    if (array[6] == "X") {
      return `A castigat ${player1Name}`;
    } else {
      return `A castigat ${player2Name}`;
    }
  } else if (array[0] == array[3] && array[0] == array[6]) {
    if (array[0] == "X") {
      return `A castigat ${player1Name}`;
    } else {
      return `A castigat ${player2Name}`;
    }
  } else if (array[1] == array[4] && array[1] == array[7]) {
    if (array[1] == "X") {
      return `A castigat ${player1Name}`;
    } else {
      return `A castigat ${player2Name}`;
    }
  } else if (array[2] == array[5] && array[2] == array[8]) {
    if (array[2] == "X") {
      return `A castigat ${player1Name}`;
    } else {
      return `A castigat ${player2Name}`;
    }
  } else if (array[0] == array[4] && array[0] == array[8]) {
    if (array[0] == "X") {
      return `A castigat ${player1Name}`;
    } else {
      return `A castigat ${player2Name}`;
    }
  } else if (array[2] == array[4] && array[2] == array[6]) {
    if (array[2] == "X") {
      return `A castigat ${player1Name}`;
    } else {
      return `A castigat ${player2Name}`;
    }
  } else {
    let isDraw = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== "X" && array[i] !== "0") {
        isDraw = false;
        break;
      }
    }
    if (isDraw) {
      return "Egalitate";
    } else {
      return "Joc in desfasurare";
    }
  }
}

export default GameResult;
