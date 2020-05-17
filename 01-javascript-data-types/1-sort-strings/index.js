/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  var collator = new Intl.Collator(["en-EN", "ru-RU"], {usage: "sort", sensitivity: "variant", caseFirst: "upper"});
    if (0 === arr.length) return arr;
    if (1 === arr.length) return arr;
    let res = arr.sort(collator.compare);
    if('desc' === param) return res.reverse();
    return res;
}
