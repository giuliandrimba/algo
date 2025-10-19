import _ from "lodash";

export type AnyObject = Record<string, any>;

/**
 * Recursively searches a JSON array and returns the full top-level objects
 * that contain all words in the search string somewhere in their properties.
 *
 * @param data - Array of objects to search
 * @param searchString - String containing one or more words
 * @returns Array of matching objects
 */
export function findObjectsMatchingAllWords(
  data: AnyObject[],
  searchString: string
): AnyObject[] {
  let result: any = []
  const words = searchString
    .toLowerCase()
    .split(" ")
    .filter(Boolean);

  words.forEach((w) => {
    let found = data.filter(obj => objectContainsAllWords(obj, w));
    result = [...result, ...found]
  })

  return result;
}

/**
 * Checks recursively if an object contains all words in any of its string properties
 */
function objectContainsAllWords(obj: AnyObject, word: string): boolean {
  const values = Object.values(obj);

  // Flatten all string values in the object recursively
  const strings: string[] = [];

  function collectStrings(val: any) {
    if (_.isString(val)) strings.push(val.toLowerCase());
    else if (_.isObject(val)) Object.values(val).forEach(collectStrings);
  }

  values.forEach(collectStrings);

  // Check if every search word is contained in at least one string
  return strings.some(str => str.includes(word));
}