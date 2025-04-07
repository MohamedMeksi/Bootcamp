function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every(word => typeof word === 'string')) {
      resolve(arr.map(word => word.toUpperCase()));
    } else {
      reject('Not all elements are strings');
    }
  });
}
function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length > 4) {
      resolve(arr.sort());
    } else {    
      reject('Array is empty');
    }
  });
}
//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


      