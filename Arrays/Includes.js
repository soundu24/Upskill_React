const numbers = [1,2,3];

// console.log(numbers.includes(1));

function includes(array, element){
    for(let a of array)
    if(a === element)
        return true;
    return false;
}

console.log(includes(numbers, 2));