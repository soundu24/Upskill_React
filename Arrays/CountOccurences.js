const numbers = [1,2,3];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, search){
    // let count = 0;
    // for(let element of array)
    //     if(element === search)
    //         count++
    //     return count;

    array.reduce((accumulator, current) => {
        const occurence = (current === search) ? 1 : 0;
        console.log(accumulator, current, search);
        return accumulator + occurence
    },0);
}