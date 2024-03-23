import { normalizeString } from './normalizeString';

/**
 * @description Search for a data object in an array of objects
 * @param {Array<object>} dataArr - Array of objects to search
 * @param {string} query - Search query
 * @param {string | number} property - Property to search
 * @returns {Array<object>} Array of objects that match the search query
 */
export const searchData = (dataArr, query, property) => {
  if (!property) {
    property = 'name';
  }

  return dataArr
    .slice()
    .sort((a, b) => {
      if (query === '') {
        return a[property].localeCompare(b[property]);
      }

      const nameA = a[property].toLowerCase();
      const nameB = b[property].toLowerCase();

      if (nameA.startsWith(query) && !nameB.startsWith(query)) {
        return -1;
      } else if (!nameA.startsWith(query) && nameB.startsWith(query)) {
        return 1;
      } else {
        return nameA.localeCompare(nameB);
      }
    })
    .filter((data) =>
      normalizeString(data[property].toLowerCase()).includes(
        normalizeString(query.toLowerCase()),
      ),
    );
};
