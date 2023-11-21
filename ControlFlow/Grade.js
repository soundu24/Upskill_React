const marks = [80, 80, 60];

console.log(calculateGrade(marks));

// function calculateGrade(marks){
//     let sum = 0;
//     for(let num of marks)
//         sum += num;
//     let avg = sum / marks.length;
//         console.log(avg); 

//     if(avg <= 59)
//         return "fail";
//     if(avg <= 69)
//         return "D";
//     if(avg <= 79)
//         return "C";
//     if(avg <= 89)
//         return "B";
//     return 'A';
// }
function calculateGrade(marks){

    const average = calculateAverage(marks);

    if(average <= 59)
        return "fail";
    if(average <= 69)
        return "D";
    if(average <= 79)
        return "C";
    if(average <= 89)
        return "B";
    return 'A';
}

function calculateAverage(array){
    let sum = 0;
    for(let value of array)
        sum += value;
    return sum / array.length; 
}