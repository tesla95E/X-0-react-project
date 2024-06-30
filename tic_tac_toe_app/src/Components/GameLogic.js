export function GameResult(array) {
  if (array[0] == array[1] && array[0] == array[2]) {
    return "player win";
  } else if (array[1] == array[4] && array[3] == array[5]) {
    return "player win";
  } else if (array[6] == array[7] && array[6] == array[8]) {
    return "player win";
  } else if (array[1] == array[4] && array[1] == array[7]) {
    return "player win";
  } else if (array[2] == array[5] && array[2] == array[8]) {
    return "player win";
  } else if (array[3] == array[6] && array[3] == array[9]) {
    return "player win";
  } else if (array[1] == array[5] && array[1] == array[9]) {
    return "player win";
  } else if (array[3] == array[5] && array[3] == array[7]) {
    return "player win";
  } else {
    return "egal";
  }
}

export default GameResult;
