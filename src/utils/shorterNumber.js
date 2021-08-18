export function shorterNumber(string) {
  if (string.length <= 4) { return string }

  const symbol = string[0];
  const numArr = string.slice(1).split(",");

  if (parseInt(numArr[1][2]) >= 5) {
    let endValue = parseInt(numArr[1][1])
    if (endValue !== 9) { endValue++ }
    numArr[1] = numArr[1][0] + endValue.toString();
  }

  let denomination;
  if (numArr.length === 2) {
    denomination = "K"
  } else if (numArr.length === 3) {
    denomination = "M"
  } else if (numArr.length === 4) {
    denomination = "B"
  } else if (numArr.length === 5) {
    denomination = "T"
  } else if (numArr.length === 6) {
    denomination = "Q"
  } else {
    denomination = "Error"
  }

  let ending;

  if (numArr[1][0] === "0" && numArr[1][1] === "0") {
    ending = "";
  } else if (numArr[1][1] === "0") {
    ending = "." + numArr[1][0];
  } else {
    ending = "." + numArr[1][0] + numArr[1][1];
  }
 
  return symbol + numArr[0] + ending + denomination;



}
