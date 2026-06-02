"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User2 {
    _firstName;
    _lastName;
    _age;
    constructor(_firstName, _lastName, _age) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    set firstName(value) {
        if (value.trim() === '') {
            throw new Error('Name is empty');
        }
        this._firstName = value;
    }
    set lastName(value) {
        if (value.trim() === '') {
            throw new Error('Name is empty');
        }
        this._lastName = value;
    }
    set age(value) {
        this._age = value;
    }
}
class Employee extends User2 {
    jobTitle;
    constructor(jobTitle) {
        super('Elek', 'Teszt', 30);
        this.jobTitle = jobTitle;
    }
    work() {
    }
}
//abstract only exists in Typescript
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
    }
}
class SideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
