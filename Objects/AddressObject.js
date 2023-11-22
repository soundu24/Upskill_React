let address = {
    street: 'abc',
    city: 'xyz',
    zipcode: 234567
};

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address);