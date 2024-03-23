/**
 * @description Normalize a string by converting Turkish characters to English characters
 * @param {string} str - String to normalize
 * @param {string} lang - Language of the string (default: 'tr')
 * @returns {string} Normalized string
 */
export function normalizeString(str, lang = 'tr') {
  str = str.toLocaleLowerCase(lang);

  str = str.replace(/ö/g, 'o');
  str = str.replace(/ü/g, 'u');
  str = str.replace(/ı/g, 'i');
  str = str.replace(/ğ/g, 'g');
  str = str.replace(/ş/g, 's');
  str = str.replace(/ç/g, 'c');

  return str;
}
