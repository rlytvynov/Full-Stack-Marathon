let EatException = require('./eat-exception')

class Product{
    constructor(name, kcal_per_portion) {
        this.name = name
        this.kcal_per_portion = kcal_per_portion
    }
    isNotJunk() {
        if(this.kcal_per_portion > 200) {
            throw new EatException()
        }
    }
}

module.exports.Product = Product