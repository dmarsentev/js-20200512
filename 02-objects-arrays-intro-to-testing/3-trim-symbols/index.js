/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let arr = [];
  arr = string.split("");
  let resultArr = [];
  let counter = 0;
  let prevCharacter = undefined;
  if (undefined === size) return string;
  for (let i = 0; i < arr.length; i++ ) {
    if (prevCharacter === arr[i]) {
      counter++;
    } else {
      counter = 0;
    }
    console.info("i = " + i + ", arr[i] = " + arr[i]);
    console.info("counter = " + counter);
    if (counter <= size - 1) {
      resultArr.push(arr[i]);
    }
    prevCharacter = arr[i];
  }
  return resultArr.join("");
}
