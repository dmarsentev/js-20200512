/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let objectKeys = Object.keys(obj);
  let list = objectKeys.filter(k => {return !fields.includes(k);});
  let entries = list.map(k => {return [k, obj[k]];});
  return Object.fromEntries(entries);
};
