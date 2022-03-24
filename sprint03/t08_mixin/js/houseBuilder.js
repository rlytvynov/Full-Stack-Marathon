'use strict';

class HouseBlueprint {
    address = null;
    date = new Date();
    description = null;
    owner = null;
    size = null;
    _averageBuildSpeed = 0.5;
    roomCount = null;
    getDaysToBuild () {
        return this.size / this._averageBuildSpeed;
    }
}

class HouseBuilder extends HouseBlueprint{
    constructor(address, description, owner, size, roomCount) {
        super();
        this.address = address;
        this.description = description;
        this.owner = owner;
        this.size = size;
        this.roomCount = roomCount;
    }
}
