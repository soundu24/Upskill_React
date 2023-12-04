let numbers = [1,2,3,4];
let another = numbers;

//solution 1 (declare an array to another array)
numbers = [];
console.log(numbers); //[]
console.log(another); //[1,2,3,4]

//solution 2
numbers.length = 0;
console.log(numbers); //[]

//recommended to use solution 1 or 2 
//solution 1 is not useful when ther is multiple reference to that array
 
//solution 3
numbers.splice(0, numbers.length);
console.log(numbers); //[]

//solution 4
while(numbers.length > 0)
    numbers.pop();
    console.log(numbers); //[]
