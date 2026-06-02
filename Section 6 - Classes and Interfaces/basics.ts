class User {
  // name = 'Balint';
  //name: string;
  //   constructor() {
  //     this.name = "Max";
  //   }

  name: string;
  age: number;
  constructor(name: string, age: number = 39) {
    // this.name = "Max";
    this.name = name;
    this.age = age;
  }
}

const balint = new User("Balint", 35);

console.log(balint);
