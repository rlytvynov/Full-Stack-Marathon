function getAnonymous(name, alias, affiliation) {
    
    let Anonymous = class {
        #_name;
        #_alias;
        #_affiliation;
        constructor(name, alias, affiliation) {
            this.#_name = name;
            this.#_alias = alias;
            this.#_affiliation = affiliation;
        }
        get name() {
            return this.#_name;
        }
        get alias() {
            return this.#_alias;
        }
        get affiliation() {
            return this.#_affiliation;
        }
    }
    return new Anonymous(name, alias, affiliation);
}

module.exports.getAnonymous = getAnonymous;