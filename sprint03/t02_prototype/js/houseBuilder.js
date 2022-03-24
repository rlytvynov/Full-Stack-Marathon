const houseBlueprint = {
    address: null,
    date: null,
    description: null,
    _averageBuildSpeed: 0.5,
    owner: null,
    size: null,
    getDaysToBuild: function() {
        return (this.size / this._averageBuildSpeed);
    }
}

function HouseBuilder(address, description, owner, size, roomCount) {
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    this.date = new Date();
    this.__proto__ = houseBlueprint;

}
