const numbers = [1,2,3,4];

//remove from end
const last = numbers.pop();
console.log(last);
console.log(numbers);

//beginning
const first = numbers.shift();
console.log(first);
console.log(numbers);

//middle
numbers.splice(2,2); //splice(index, delete number of elements)
console.log(numbers);