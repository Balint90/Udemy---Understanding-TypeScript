let age: any = 36;

//without any it would fail
// basicallyU are going back to javascript... USE IT ONLY AS A LAST RESORT!
age = '37';
age = false;
age = {};
age = [];

//Union type
//Use it when I need more flexibility 
// (for example at the time of the variable creation I don't have a value (it will come after an ajax request)) I can use string | undefined type
let ageUnionType: string | number = 36;
ageUnionType = '37';
ageUnionType = false; //HIBA
ageUnionType = {}; //HIBA
ageUnionType = []; //HIBA

