const reader = require('readline-sync');
const add = require('./b');

let x = parseInt(reader.question('Enter First No.: '));
let y = parseInt(reader.question('Enter Second No.: '));
let z = add(x,y);
console.log(`Sum of ${x} & ${y} is ${z}`);



