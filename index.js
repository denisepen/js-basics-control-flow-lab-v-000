// Write your code in this file!
let message;

function scuberGreetingForFeet(distance) {

    if(distance <= 400) {
      message = 'This one is on me!';
    } else if (distance >= 2000 && distance <= 2500) {
      message = 'I will gladly take your thirty bucks.';
    }
    else {
      message = 'No can do.';
    }
    return message
}
