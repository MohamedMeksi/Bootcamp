
function weight1 (kg) {return kg * 1000;}
console.log(weight1(2));


const weight2 = function(kg) {return kg * 1000};
console.log(weight2(2));


const weight3 = (kg) => kg * 1000;
console.log(weight3(2));