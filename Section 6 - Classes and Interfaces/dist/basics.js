"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    // name = 'Balint';
    //name: string;
    //   constructor() {
    //     this.name = "Max";
    //   }
    name;
    age;
    constructor(name, age = 39) {
        // this.name = "Max";
        this.name = name;
        this.age = age;
    }
}
const balint = new User("Balint", 35);
console.log(balint);
