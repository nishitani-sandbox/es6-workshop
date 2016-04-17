/* eslint no-console: 0 */

let args = process.argv[2].split(',');
args = args.map(arg => +arg);

const sumAll = ary => ary.reduce((sum, num) => sum + num);
const avg = (...ary) => sumAll(ary) / ary.length;
console.log(avg(...args));
