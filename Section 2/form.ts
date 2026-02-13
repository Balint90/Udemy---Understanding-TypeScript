const inputEl = document.getElementById("user-name") as HTMLInputElement | null;
// '!' means it will be not null

// if (!inputEl) {
//     throw new Error('Element not found!');
// }

console.log(inputEl?.value);
// ? mark checks if the variable is null, element could be null, do the next step if the variable is not null