interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

//can define this again, but instead of override/overwrite typescript will merge this two interface into one
//it is useful when the interface comes from a library or file (which could be overwritten)
//so you can safely extend something you don't directly control
//this won't work if you are using types (type Authenticatable { ... })
interface Authenticatable {
  role: string;
}

//you can extend interfaces as well
interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
}

let user: Authenticatable;

user = {
  email: "test@example.com",
  password: "abc1",
  role: "user",
  login() {
    //reach out to DB, check credentials, create session
  },
  logout() {
    //clear session
  },
};

//class uses (implements) an interface:
//you can implement more interfaces separated by commas: e.g.: implements Authenticatable, User

class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public role: string,
  ) {}

  login(): void {}

  logout(): void {}
}

function authenticate(user: Authenticatable) {
  user.login();
}

//copied from the learning materials:

// A lesser known but nonetheless interesting feature of TypeScript interfaces is that you can also use them to define function types.

// For example, you might want to define the type of a sum function that takes two numbers as input and returns their sum.

// You could write this code:

// type SumFn = (a: number, b: number) => number; // function type

// let sum: SumFn; // making sure sum can only store values of that function type

// sum = (a, b) => a + b; // assigning a value that adheres to that function type
// Alternatively, you can also define the SumFn type via an interface:

// interface SumFn {
//   (a: number, b: number): number;
// }
// It's up to you which alternative you prefer.

// Typically, you'll encounter the first version (type SumFn) more often but it's worth knowing about the alternative, too.
