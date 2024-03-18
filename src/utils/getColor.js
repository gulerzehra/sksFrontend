export function getColor(variable) {
  return ({ $isDarkMode }) =>
    $isDarkMode ? `var(${variable})-dark` : `var(${variable})`;
}
