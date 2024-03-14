class Product{
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }
  
  addToStock(quantity){
    this.inStock += quantity
  }

  calculateDiscount(percent){
    return this.price * (1 - (percent/100))
  }
}

module.exports = Product;