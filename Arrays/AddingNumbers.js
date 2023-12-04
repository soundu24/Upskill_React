const numbers = [3,4];

// numbers = []; //throw an error

//add elements to the end
numbers.push(5,6);

//beginning
numbers.unshift(1,2);

//middle
numbers.splice(2, 0, 'a','b'); //splice(position,delete numbers, add elements)

console.log(numbers);