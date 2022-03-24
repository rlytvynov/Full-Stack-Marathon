class Tower extends Building {

    constructor(floors, material, address){
        super(floors, material, address);
    }

    set hasElevator (value) {
        if(value)
            this._hasElevator = '+'; 
        else 
            this._hasElevator = '-';
    }

    get hasElevator(){
        return this._hasElevator;
    }

    set arcCapacity (value) {
        this._arcCapacity = value; 
    }

    get arcCapacity(){
        return this._arcCapacity;
    }

    set height (value) {
        this._height = value; 
    }

    get height(){
        return this._height;
    }

    getFloorHeight() {
        return parseFloat(this._height / this.floors).toFixed(15);
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator: ${this._hasElevator}`,
            `Arc reactor capacity: ${this._arcCapacity}`,
            `Height: ${this._height}`,
            `Floor height: ${this.getFloorHeight()}`,
        ].join('\n');
    }

};

