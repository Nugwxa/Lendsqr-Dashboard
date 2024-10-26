/**
 * Formats a Date object into a string in the format "Month Day, Year Hours:Minutes AM/PM".
 *
 * @param {Date} date - The Date object to format.
 * @returns {string} The formatted date string.
 *
 * @example
 * const date = new Date("2020-05-15T10:00:00");
 * console.log(formatDate(date)); // Outputs: "May 15, 2020 10:00 AM"
 */ export default function formatDate(date: Date): string {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM' // Determine AM or PM
  hours = hours % 12 // Convert to 12-hour format
  hours = hours ? hours : 12 // Adjust hour '0' to '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes // Add leading zero if needed

  return `${month} ${day}, ${year} ${hours}:${minutesStr} ${ampm}`
}
