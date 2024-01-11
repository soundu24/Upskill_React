// const numbers = [4,1,2,3];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const courses = [
    {id:1, name: 'java'},
    {id:2, name: 'angular'}
];

courses.sort(function(a,b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
});
console.log(courses);