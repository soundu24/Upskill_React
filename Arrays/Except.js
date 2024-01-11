const numbers = [1,2,3];

const output = expect(numbers, [-1]);

console.log(output);

function expect(array, excluded){
    const output = [];
    for(let a of array)
        if(!excluded.includes(a))
            output.push(a)
            return output;
}