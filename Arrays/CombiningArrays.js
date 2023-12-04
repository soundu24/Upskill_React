const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);

const slice = combined.slice(2,4);//[3,4]
const slice1 = combined.slice(2);//[3,4,5,6]

console.log(combined);//[1,2,3,4,5,6]
console.log(slice);//[3,4]
console.log(slice1);//[3,4,5,6]