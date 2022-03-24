class HardWorker {

    _name;
    _age;
    _salary;

    set name (value) {
        this._name = value;
    }

    get name () {
        return this._name;
    }

    set age(value) {
        if(value < 100 && value >= 1) {
            this._age = value;
        }
    }
    get age() {
        return this._age;
    }

    set salary(value) {
        if(value >=100 && value < 10000) {
            this._salary = value;
        }
    }
    get salary() {
        return this._salary;
    }

    toObject() {
        return {name: this._name, age: this._age, salary: this._salary};
    }
}
export { HardWorker }