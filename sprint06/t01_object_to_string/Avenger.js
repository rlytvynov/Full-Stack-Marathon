class MyFunc extends Function {
    constructor() {
        super('...args', 'return this.self.call(...args)')
        return this.self = this.bind(this);
    }
}

module.exports.Avenger = class Avenger extends MyFunc {
    constructor(object) {
        super();
        this._name = object.name;
        this._alias = object.alias;
        this._gender = object.gender;
        this._age = object.age;
        this._powers = object.powers
    }

    toString() {
        return `name: ${this._name}\ngender: ${this._gender}\nage: ${this._age}\n`
    }

    call() {
        return `${this._alias.toUpperCase()}\n` + this._powers.join('\n');
    }
}
