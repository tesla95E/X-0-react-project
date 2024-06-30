const tableArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export function GameResult(tableArray) {
  if (tableArray[0] == tableArray[1] && tableArray[0] == tableArray[2]) {
    return "player win";
  } else if (tableArray[1] == tableArray[4] && tableArray[3] == tableArray[5]) {
    return "player win";
  } else if (tableArray[6] == tableArray[7] && tableArray[6] == tableArray[8]) {
    return "player win";
  } else if (tableArray[1] == tableArray[4] && tableArray[1] == tableArray[7]) {
    return "player win";
  } else if (tableArray[2] == tableArray[5] && tableArray[2] == tableArray[8]) {
    return "player win";
  } else if (tableArray[3] == tableArray[6] && tableArray[3] == tableArray[9]) {
    return "player win";
  } else if (tableArray[1] == tableArray[5] && tableArray[1] == tableArray[9]) {
    return "player win";
  } else if (tableArray[3] == tableArray[5] && tableArray[3] == tableArray[7]) {
    return "player win";
  } else {
    return "egal";
  }
}

console.log(GameResult(tableArray));
