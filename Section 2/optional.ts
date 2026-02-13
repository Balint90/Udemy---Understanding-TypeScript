// ? marks the variable as optional
function generateError(msg?: string) {
    throw new Error(msg);
}

generateError('An error occured!');
generateError();

// role is an optional property with the help of ?
type User = {
    name: string,
    age: number,
    role?: 'admin' | 'guest'
}

let input = ''; //''
// ?? is the nullish coalescing operator
//const didProvideInput = input ?? false;
const didProvideInput = input || false;