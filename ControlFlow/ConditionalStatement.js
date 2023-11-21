//Conditional Statements
    // 1. If..else
    // 2. Switch case

//1. If hour is b/n 6am to 12pm: Good Morning!, If it is b/n 12pm and 6pm: Good afternoon!, Otherwise: Good Evening!


// if(condition){
//     st1;
// }else if(condition){
//     st2;
// }else if(condition){
//     st3;
// }else{
//     st4;
// }

let hour = 18;
if(hour >= 6 && hour < 12)
    console.log('Good Morning!');
else if(hour >= 12 && hour < 18)
    console.log('Good Afternoon!');
else
    console.log('Good Evening!');

//2. Switch

// switch(variable){
//     case '': st1;break;
//     case '': st2;break;
//     default: stn;
// }
//compare a value of a variable against a bunch of other values --> SWITCH CASE

let role = 'guest';
switch(role){
    case 'guest': 
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Default');
}