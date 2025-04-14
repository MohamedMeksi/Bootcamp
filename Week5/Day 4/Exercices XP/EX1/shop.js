const products = require('./products');

function findProductByName(productName) {
    return products.find(product => product.name === productName);
}
console.log(findProductByName('Laptop'));
console.log(findProductByName('Smartphone'));
console.log(findProductByName('Tablet'));
