let address = showAddress('abc','xyz',234565);
console.log(address);

// factory function
function showAddress(street, city, zipcode){
    return {
        street,
        city,
        zipcode
    };
}

// constructor function
function ShowAddress(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

let address1 = new ShowAddress('xyz', 'abc', 234544);
console.log(address1);