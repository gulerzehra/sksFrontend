/**
 * @description Date & Time Formatter: Format a date to X/X/XXXX | X:XX:XX
 * @param {Date} date
 * @returns {string} X/X/XXXX | X:XX:XX
 */
export function dtf(date) {
  return (
    new Date(date).toLocaleDateString() +
    ' | ' +
    new Date(date).toLocaleTimeString()
  );
}
