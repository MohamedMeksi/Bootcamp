const _ = require('lodash');
const { add, multiply } = require('./math');

const result1 = add(5, 3);      
const result2 = multiply(4, 6);


const numbers = [10, 20, 30, 40];
const sum = _.sum(numbers);       
const max = _.max(numbers);  

console.log(`Addition: ${result1}`);
console.log(`Multiplication: ${result2}`);
console.log(`Somme (lodash): ${sum}`);
console.log(`Max (lodash): ${max}`);
