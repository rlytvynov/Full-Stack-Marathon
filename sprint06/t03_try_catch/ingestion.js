let {Product} = require('./product')
let EatException = require('./eat-exception')

class Ingestion {
    products = []
    day_of_diet = 0
    constructor(meal_type, id) {
        this.meal_type = meal_type
        this.id = id
    }

    setProduct(product) {
        this.products.push(product)
    }

    getProductInfo(product) {
        let result = {}
        for (let p of this.products) {
            if (p.name === product) {
                result.kcal = p.kcal_per_portion
                return result
            }
        }
    }

    getFromFridge(product) {
        for (let p of this.products) {
            if(p.name === product) {
                try {
                    p.isNotJunk()
                } catch(err) {
                    err.message = `To many calories in ${product} for ${this.meal_type}`
                    throw err
                }
            }
        }
    }

}


module.exports.Ingestion = Ingestion