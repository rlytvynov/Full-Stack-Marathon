let Model = require('./../model.js')

class Hero extends Model {
    data = []
    constructor() {
        super('heroes')
    }
}

module.exports = Hero