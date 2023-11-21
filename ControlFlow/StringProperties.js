const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'abc'
};

showProperties(movie);

function showProperties(obj){
    for(let index in obj)
        if(typeof(obj[index]) ===  'string')
             console.log(index, obj[index]);
}