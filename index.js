function scuberGreetingForFeet( distance){
  // Write your code here!
  if (distance <= 400){
    return "This is on me";
  }else if (distance >= 400 && distance < 2000){
    return " That will be  20 bucks.";
  }else if ( distance > 2000 && distance < 2499){
    return " I will gladly take your  30 bucks";
  }else if ( distance > 2500){
    return " No can do"
  }


}

function ternaryCheckCity( city){
  // Write your code here!
    if (city ===  NYC){
      return  " Ok sounds good"
    } else if (city ==! NYC ){
      return " No go "
    } 

  }
}

function switchOnCharmFromTip(){
  // Write your code here!
switch (tip){
  case 'generous':
  return ' Thank you so much .';
  break;
  case ' not as generous':
    return ' Thnakyou'
    break;
    default:
      return 'bye'
    




}

}