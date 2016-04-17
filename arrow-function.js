/* eslint no-console: 0 */

const inputs = process.argv.slice(2);
const result = inputs
  .map(str => str[0])
  .reduce((str, char) => str + char);

console.log(result);
