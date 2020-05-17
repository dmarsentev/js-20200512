/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let entries = fields.filter(k => { return k in obj;} ).map( k => {return [k, obj[k]];});
    return Object.fromEntries(entries);
};
