module.exports.Team = class Team {
    constructor(id, avengers) {
        this._id = id;
        this._avengers = avengers;
    }

    battle(damageObj) {
        let count = 0;
        for (let i = 0; i < this._avengers.length; i++) {
            this._avengers[i].hp -= damageObj.damage;
            if(this._avengers[i].hp <= 0) {
                count++;
            }
        }

        for (let i = 0; i < count; i++) {
            for (let j = 0; j < this._avengers.length; j++) {
                if(this._avengers[j].hp <= 0) {
                    this._avengers.splice(j, 1);
                    break;
                }
            }
        }

        for (let i = 0; i < this._avengers.length; i++) {
        }
    }

    calculateLosses(clonedTeam) {
        if(clonedTeam._avengers.length > this._avengers.length) 
            console.log(`In this battlewe lost ${clonedTeam._avengers.length - this._avengers.length} Avengers`);
        else {
            console.log("We haven't lost anyone in this battle!");
        }
    }

    clone() {
        return  Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)));
    }
}