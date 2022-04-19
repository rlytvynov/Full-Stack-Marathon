let Model = require('./../model.js')

class User extends Model {
    data = []
    constructor() {
        super('users')
    }
}

module.exports = User