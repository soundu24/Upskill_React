// //for loop
// for(initialExpression; condition; incrementExpression){
//     statements;
// }

for(let i = 0; i < 5; i++){
    console.log("Hello", i);
}

for(let i = 0; i < 5; i++){
    if(i % 2 !== 0)
    console.log(i, " is an odd number");
    else
    console.log(i, " is an even number");
}

//while loop
//initialExpression
//while(condition){
    // statement;
    // incrementExpression
// }

let i = 0;
while(i <= 5){
    if(i % 2 !== 0)
    console.log(i);
    i++;
}

//dowhile loop  //execute atleast once
//initialExpression
//do{
// statement;
// incrementExpression;
// }while(condition);


let j = 0;
do{
    if(j % 2 !== 0)
    console.log(j);
    j++;
}while(j<=5);


//infinite loops
while(i < 5){
    console.log(i);
    // i++;
}

//for-in loops
// iterate over properties of an object or elements in an array

    const person ={
        name: 'Sound',
        age: 23
    };
    for(let key in person){
        console.log(key, person[key]); //name age

    }

    // to display the properties of an object use 
    //dot notation
        // person.name 
    // or 
    // bracket notation(the name of a target property as a string: person['age'])
        // person['name']


    const colors = ['red','blue','pink'];
    for(let index in colors){
        console.log(index, colors[index]);
    }


    //for-of loop 
    //no need of index
    //iterate over elements in an array or maps
    for(let index of colors){
        console.log(index);
    }