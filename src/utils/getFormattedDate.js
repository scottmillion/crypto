export function getFormattedDate() {
  const today = new Date()
  const year = today.getFullYear()
  let day = today.getDate().toString()
  let month = (today.getMonth() + 1).toString()
  if (day.length === 1) {
    day = '0' + day
  }
  if (month.length === 1) {
    month = '0' + month
  }
  return `${year}-${month}-${day}`
}
