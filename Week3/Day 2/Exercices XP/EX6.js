// !Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
    };

// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
var result = "";
for (let key in details) {
    result += key + " " + details[key] + " ";
    result = result
}
console.log(result);