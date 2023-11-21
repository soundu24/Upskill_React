function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circles = new Circle(1);

// Circle.call({},1); instead of new keyword we can call like this and we can call arguments explicitly like 1,2,3,4 and so on
// Circle.apply({},[1,2,3]); call arguments as an array

// When we declare Circle() function using this syntax internally JavaScript Engine will use in-built Function() to create an object

    // const Circle1 = new Function('radius', `
    // this.radius = radius;
    //     this.draw = function() {
    //         console.log('draw');
    //     }
    // `);

    // const circle = new Circle1(1);