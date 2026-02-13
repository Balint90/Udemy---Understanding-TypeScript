let hobbies = ['Sports', 'Cooking'];

//hobbies.push(10); //HIBA, szám nem mehet a szövegek közé

let users: string[];
//let usersUnion: (string | number)[];
let usersUnion: Array<string | number>;

usersUnion = [2, 'Max'];
usersUnion = [5, 1];
usersUnion = ['Max', 'Anna'];

let possibleResults: [number, number]; // [-1, 1] Tuple
//Egy olyan lista, amit nem tudsz megváltoztatni, miután létrehoztad.
//Képzeld el úgy, mint egy lezárt csomagot. Amikor összeraksz adatokat egy Tuple-be,
// "lehegeszted" a dobozt. Többet nem tehetsz bele semmit, nem vehetsz ki belőle semmit,
//  és nem cserélheted ki a tartalmát.

let user: {
    name: string;
    age: number;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Balint',
    age: 35,
    hobbies: ['Programming', 'Eating'],
    role: {
        description: 'IDUNNO',
        id: 1
    }
};

let val: {} = 'akármi lehet..., nem csak object itt a {} nem empty objectet jelent';
val = 0;
val = {};
val = false;

const object = {}; //ez empty object

//let data: {}; //basically any value

const someObj = {
    'name': 'Max',
    0: 0
}

//generic type: means it must be an object but U don't know what key-values will be in there, just the type of the key-value pairs' type
let data: Record<string, number | string>

data = {
    entry1: 1,
    entry2: 'some string',
}
