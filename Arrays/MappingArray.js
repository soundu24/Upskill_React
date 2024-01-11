const numbers = [4,1,2,3,-1];

const filtered = numbers.filter(n => n>= 0);

const items = filtered.map(n => {
    const obj = {value: n};
    return obj;
})

// const html = '<ul>' + items.join('') + '</ul>'

console.log(items);