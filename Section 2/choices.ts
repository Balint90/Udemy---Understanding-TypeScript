
let userRole = 0 //0 => Admin, 1 => Guest

//ENUMs:

enum Role {
    Admin = 1,
    Editor,
    Guest,
}

let role = Role.Admin;
//role = 0; // enum indexes from 0 if U don't specify otherwise (override defaults) error if Admin = 1 but it can be Admin = 'Admin' as well

enum RoleString {
    Admin = 'Admin',
    Editor = 'Editor',
    Guest = 'Guest',
}

//Literal types:
//Strength is in union types
let role2: 'admin' | 'editor' | 'guest' = 'admin';
role2 = 'guest' //not assignable if the literal uniontype doesn't contain 'guest'
//literal types can use numbers as well not just strings

let possibleResults2 = [1 | -1, 1 | -1];
possibleResults2 = [1, -1];

//TypeAliases (alias customtypes)
type RoleType = 'admin' | 'editor' | 'guest' | 'reader';

let userRole2: RoleType = 'admin';

function access(role: Role) {

}
