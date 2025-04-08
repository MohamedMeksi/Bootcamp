// !Utilisez Promise.resolve(value)pour créer une promesse qui se résoudra avec une valeur de 3
const promiseresolve = Promise.resolve(3);

promiseresolve.then((value) => {
    console.log(value); 
})
.catch((error) => {
    console.log(error);
});


// !Utilisez Promise.reject(error)pour créer une promesse qui se rejettera elle-même avec la chaîne « Bouh !
const promiseReject = Promise.reject('Bouh !');

promiseReject.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
});