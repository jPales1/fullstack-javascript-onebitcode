const User = require('./User.js'); 
const Product = require('./Product.js'); 

const user = new User("Maria", "maria@email.com", "senha123");
user.login("maria@email.com", "senha123");

const product = new Product("TV", "LED 22", "1000");
console.log(product)
product.addToStock(10)
console.log(product.calculateDiscount(10))
console.log(product)