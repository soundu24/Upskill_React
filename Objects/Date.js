const now = new Date();
const date1 = new Date('May 11 2022 08:30');
const date2 = new Date(2022,4, 11, 9, 0);
// year,month(0-11),date,hours,minutes

console.log(now);
console.log(date1);
console.log(date2);

now.setFullYear(2022);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());