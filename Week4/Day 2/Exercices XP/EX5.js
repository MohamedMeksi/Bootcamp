const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const epicStr = epic.reduce((acc, curr) => acc + ' ' + curr);
console.log(epicStr);

