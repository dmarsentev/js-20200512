/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arr = path.split('.');

  return function (obj) {
    let currentOject = obj;
    for (let i=0; i < arr.length; i++) {
      if (currentOject.hasOwnProperty(arr[i])) {
        if ("object" === typeof currentOject[arr[i]]) {
          currentOject = currentOject[arr[i]];
        } else {
          return currentOject[arr[i]];
        }
      }
    }
  }

}
