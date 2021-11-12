export function getYearMonthDayString(date) {
  const year = date.getFullYear()
  let day = date.getDate().toString()
  let month = (date.getMonth() + 1).toString()
  if (day.length === 1) {
    day = '0' + day
  }
  if (month.length === 1) {
    month = '0' + month
  }
  return `${year}-${month}-${day}`
}
