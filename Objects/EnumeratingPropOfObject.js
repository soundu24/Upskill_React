const circle = {
    radius: 1,
    draw: function() {
        console.log('draw');
    }
};

for(let key in circle){
    console.log(key, circle[key]);
}

for(let key of Object.keys(circle)){
    console.log(key);
}

for(let entry of Object.entries(circle)){
    console.log(entry);
}

//to check properties exist in an object -- use in keyword
if('color' in circle)
console.log('Yes'); //o/p: display nothing

if('radius' in circle)
console.log('Yes'); //o/p: Yes