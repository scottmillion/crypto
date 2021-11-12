export function convertLargeNumber(string) {
  const symbol = string[0]
  let number = parseFloat(string.slice(1).replace(/,/g, ''))

  if (number >= 1000) {
    number = number.toFixed()
  } else if (number >= 1) {
    number = number.toFixed(2)
  } else {
    number = number.toFixed(6)
  }

  return number >= 1000
    ? symbol + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : symbol + number.toString()
}
