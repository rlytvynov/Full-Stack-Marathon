let LLData = require("./LLData");

module.exports.LList = class LList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        let node = new LLData(value); //creating the node using class Node
        if (this.length === 0) {
            this.head = node; // If there are no nodes 
            // node variable will be the first and head node in the list
        } else {
            let current = this.head;
    
            while(current.next) {
                current = current.next;
            }
            current.next = new LLData(value);
        }
        this.length++;   
    }

    getFirst() {
        return this.head ? this.head.data : null;
    }

    getLast() {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        return current;
    }

    addFromArray(arrayOfData) {
        arrayOfData.forEach(element => this.add(element));
    }

    remove(value)  {

        if(!this.head) return false;
        let current = this.head;

        if(current.data === value) {
            this.head = current.next;
            current = null;
            return;
        }

        while(current.next) {

            if(current.next.data === value) {
                current.next = current.next.next;
                this.length--;
                return true;
            }
            current = current.next;
        }

        return false;

    }

    removeAll(value) {
        if(!this.head) return false;
        let current = this.head;

        if(current.data === value) {
            this.head = current.next;
            current = null;
        }
        current = this.head;

        while(current.next) {
            if(current.next.data === value) {
                current.next = current.next.next;
                this.length--;
            }
            current = current.next;
        }
    }

    contains(value) {
        let current = this.head;
        while(current) {
            if(current.data === value) return true;
            current = current.next;
        }
        return false;
    }

    clear() {
        this.head = null;
    }
    
    count() {
        return this.length;
    }

    toString() {
        let current = this.head;
        while(current.next) {
            if(current.next.next)console.log(current.data + ',');
            else console.log(current.data);
        }
    }

    [Symbol.iterator] = function *() {
        for (let i = this.head; i; i = i.next) {
            yield i.data;
            
        }
    }

    filter(callback) {
        return [...this].filter(callback);
    }
}