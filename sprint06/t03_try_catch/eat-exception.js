class EatException extends Error{
    constructor(str) {
        super(str)
        this.message = 'No more junk food, dumpling'
    }
}

module.exports.EatException = EatException