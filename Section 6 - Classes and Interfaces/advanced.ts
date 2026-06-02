class User2 {
    constructor(protected _firstName: string, protected _lastName: string, protected _age: number) {

    }

    get fullName(): string {
        return this._firstName + ' ' + this._lastName;
    }

    set firstName(value: string) {
        if (value.trim() === '') {
            throw new Error('Name is empty');
        }
        this._firstName = value;
    }

    set lastName(value: string) {
        if (value.trim() === '') {
            throw new Error('Name is empty');
        }
        this._lastName = value;
    }

    set age(value: number) {
        this._age = value;
    }
}

class Employee extends User2 {
    constructor(public jobTitle: string) {
        super('Elek', 'Teszt', 30);
    }

    work() {

    }
}

//abstract only exists in Typescript
abstract class UIElement {
    constructor(public identifier: string) { }

    clone(targetLocation: string) {

    }
}

class SideDrawerElement extends UIElement {
    constructor(public identifier: string, public position: 'left' | 'right') {
        super(identifier);
    }
}