let Promis = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('succès');
    }, 4000);

});
Promis.then((value) => {
    console.log(value);
});
Promis.catch((error) => {
    console.log(error);
});