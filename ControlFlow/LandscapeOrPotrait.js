let width = 2;
let height = 4;
let num = isLandscape(width, height);
console.log(num);

function isLandscape(width, height){
//  return   (width>height)? true : false;
return (width > height);
}