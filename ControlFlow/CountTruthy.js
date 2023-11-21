const array = [0,null,undefined,'',1,2,false,3];
console.log(countTruthy(array));
// countTruthy(array);

function countTruthy(array) {
    let count = 0;
    for(let index of array)
        if(index)
            count++;
        return count;
}