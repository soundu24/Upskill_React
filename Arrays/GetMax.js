const numbers = [1,2,34,5];

const max = getMax(numbers);

console.log(max);

function getMax(array){
    // if(array.length === 0) return undefined;

    // let max = array[0];

    // for(let i = 1; i < array.length; i++)
    //     if(array[i] > max)
    //         max= array[i];
    //     return max

    return array.reduce((a, b) => (a > b) ? a : b);
}