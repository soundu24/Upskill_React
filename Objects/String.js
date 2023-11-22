//In JS there are two types of String

// String primitive
const message = 'Hi!! Welcome to String concepts';
console.log(typeof message); 
console.log(message.toLowerCase());
console.log(message.length);
console.log(message.indexOf('i')); //o/p: 1
console.log(message.indexOf('I')); //o/p: -1
console.log(message.split(' '));
//String Object
const another = new String('hi')
console.log(typeof another)