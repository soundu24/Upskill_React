//Arithmetic

    let a = 10;
    let b = 12;

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);

    // Increment (++) 
    console.log("Post Increment", a++);
    console.log("Pre Increment",++a);
        
    //Decrement
    console.log("Post decrement: ", b--);
    console.log("Pre decrement: ", --b);

//Assignment
    let x = 10;

    x++; 
    //is same as 
    x = x + 1;

    //but to increment more than 1
    x = x + 2;
    //or
    x += 2;

    //multiplication assignment operator
    console.log(x *= 3);
    
//comparison

    //Relational
    let y = 2;
  console.log(y > 0);
  console.log(y >= 1);
  console.log(y < 2);
  console.log(y <= 2);

    //Strict Equality  (Type + Value)
    console.log(2 === 2); //true
    console.log('2' === 2); //false

    //loose Equality(Value) (If the value on left side is boolean/string/number automatically Convert them to boolean/string/number)
    console.log(2 == 2); //true
    console.log('2' == 2); //true
    console.log(true == 1); //true

//ternary or conditional operator

    //If a customer has 20 points, they are 'gold' customer, Otherwise 'silver'

    let points = 40;
    let type = points > 20 ? 'gold' : 'silver';
    console.log(type); 

//logical with Non-Booleans
    //logical AND(&&)
    console.log(true && true); //true
    console.log(false && true); //false 

    //logical OR (||)
    let p = true;
    let q = false;
    console.log(p || q);//true
    console.log(p && q); //false

    //Logical Not (!)
    let s = !p;
    console.log(s);


//Falsy (false)
//Falsy values are : undefined, null, 0, false, '', NaN

//Anything that is not falsy --> Truthy

false || true //true
false || 'avc' //avc
false || 1 //1
false || 1 || 2 //1  //short-circuiting

//for eg

let ab = 'red';
let cd = 'blue';
let pq = ab || cd;
console.log(pq);//red

let ab1 = undefined;//(falsy)
let cd1= 'blue';
let pq1 = ab1 || cd1;
console.log(pq1);//blue

//bitwise

//precedence
paranthesis >> multiplication