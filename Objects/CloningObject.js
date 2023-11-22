//To clone an object use spread operator or for-in loop or Object.assign({},nameOfThatFunction/Object)

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// const another = Object.assign({}, circle);

// const another = Object.assign({color:'yellow'}, circle);

const another = {...circle};
//Above code is equivalent to below code
// another['radius'] = circle ['radius'];


console.log(another);