//speed limit = 70
//5 --> 1 point
//12 points --> license suspended
checkSpeed(180);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmperhour = 5;

    if(speed < speedLimit + kmperhour)
        console.log('OK');
   else {
       let points = Math.floor((speed - speedLimit) / kmperhour);
       if(points >= 12){
          console.log('Suspended license');
       }else
          console.log('points: ', points);
   }
}