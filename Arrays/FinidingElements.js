// Finding primitives
const numbers = [1,2,3,1,4];

console.log(numbers.indexOf('a')); //-1
console.log(numbers.indexOf('1'));//-1
console.log(numbers.indexOf(1));//0
console.log(numbers.lastIndexOf(1));//3

console.log(numbers.indexOf(1) !== -1); //true
console.log(numbers.includes(1)) //true 

//finding reference types
const courses = [
    {id:1, name:'a'},
    {id:2, name:'b'},
];

// console.log(courses.includes({id:1, name:'a'})) //false

const course = courses.find(function(course){
//    return course.name === 'a'; //{id:1, name: 'a'}
        return course.name === 'c'; //undefined
});

console.log(course); 


const course1 = courses.findIndex(function(course){
       return course.name === 'a'; //0
            // return course.name === 'c'; //-1
    });
    
    console.log(course1); 