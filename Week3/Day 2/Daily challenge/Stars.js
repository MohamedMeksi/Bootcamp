
// !Write a JavaScript program that recreates the pattern below.
// !Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// !Do this Daily Challenge by yourself, without looking at the answers on the internet.

// * rep ==>1
let stars = '';
for (let i = 1; i <= 6; i++) {
    stars += '* ';
    console.log(stars.trim());
}


// * rep ==>2
let n = 6;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    star += "* ";
  }
  star += "\n";  
}
console.log(star);


// * rep ==>3

console.log('*');
console.log('* *');
console.log('* * *');
console.log('* * * *');
console.log('* * * * *');
console.log('* * * * * *');
