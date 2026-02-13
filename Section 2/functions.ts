function add(a: number, b: number) {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
    console.log(msg);
};

function performJob(cb: (m: string) => void) {
    //...
    cb('Job done!');
}

performJob(logMsg);

type User = {
    name: string,
    age: number,
    greet: () => {},
};

let user: User = {
    name: 'Balint',
    age: 35,
    greet() {
        console.log('Hello there!');
        return this.name;
    }
}

user.greet();