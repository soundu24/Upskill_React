//objects is a collection of key, value pairs
//value can be of any type: 
// i.e, number, boolean, string, null, undefined, array, function

// let radius = 1;
// let x = 1;
// function draw() {}
// instead of drawing like this we can write as a part of circle object 

//we can create an object by using factory function or constructor function

//call it as Object-Oriented Programming (OOP)
const circle = {
    radius: 1,
    location:{
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); //calling method of circle object

// If a FUNCTION is part of an object, then this is a METHOD
/**----------------------------------------------------------- */

// Camel notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour
//FACTORY FUNCTION
//Function Name in camel Notation

function createCircle(radius){
    return {
        // radius: radius,   this is same as 
        radius,
        draw(){
            console.log('draw');
        }
        // draw: function() {
        //     console.log('draw');
        // }
    };  
}
const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);

/**-------------------------------------------------- */

// Function name in Pascal Notation
//this keyword
//CONSTRUCTOR FUNCTION

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circles = new Circle(1);

/**-------------------------------------------- */

//DYNAMIC NATURE OF OBJECTS

const rect = {
    height: 12
};
rect.width = 14;
rect.draw = function() {}
console.log(rect);

// const rect = {} //Cannot reassign const but we can modify and delete properties

//we can also delete these properties using delete keyword

delete rect.draw;
console.log(rect);