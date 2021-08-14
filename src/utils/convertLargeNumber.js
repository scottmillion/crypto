export function convertLargeNumber(string) {
  const symbol = string[0];
  const number = parseInt(string.slice(1).replace(/,/g, ''));
  return number >= 10000 ? symbol + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : string;
}
