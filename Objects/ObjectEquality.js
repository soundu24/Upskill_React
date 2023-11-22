function ShowAddress(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

let address1 = new ShowAddress('xyz', 'abc', 234544);
let address2 = new ShowAddress('xyz', 'abc', 234544);
let address3 = address1;

console.log(address1);
console.log(address2);


function areEqual(address1, address2){
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode
}

function areSame(address1, address2){
    return address1 === address2;
}

console.log(areSame(address1, address2)); //false
console.log(areSame(address1, address3));  //true
console.log(areEqual(address1, address2)); //true
