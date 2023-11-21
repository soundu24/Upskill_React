//value types OR Primitive: Number, String, Boolean, Symbol, undefined, null
//Reference Types: Object, Function, Array

let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);
//when we work with primitive, values are stored in variable so the output will be x = 20 and y = 10

let x1 = {value: 10};
let y1 = x1;

x1.value = 20;
console.log(x1);
console.log(y1);

//when we work with reference types, object is stored in memory and address of that is copied to variable so the output is x = 20 and y = 20

//Primitives are copied by their value
//Objects are copied by their reference