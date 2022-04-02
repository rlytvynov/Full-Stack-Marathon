class MyFunc extends Function {
    constructor() {
        super('...args', 'return this.self.call(...args)')
        return this.self = this.bind(this);
    }
}

module.exports.Avenger = class Avenger extends MyFunc {
    constructor(heroName, alias, gender, age, powers, hp) {
        super();
        this._name = heroName;
        this._alias = alias;
        this._gender = gender;
        this._age = age;
        this._powers = powers;
        this._hp = hp;
    }

    get hp() {
        return this._hp;
    }

    set hp(hpNew) {
        this._hp = hpNew;
    }
    
    toString() {
        return `name: ${this._name}\ngender: ${this._gender}\nage: ${this._age}\n`
    }

    call() {
        return `${this._alias.toUpperCase()}\n` + this._powers.join('\n');
    }
}
