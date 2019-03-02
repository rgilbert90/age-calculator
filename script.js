var age = prompt("What is your age?");
if(age<0) {
  console.log("Please enter a real age!");
}
else if(age=="21") {
  console.log("Happy 21st birthday!");
}
else if(((age%2)>0)) {
  console.log("Your age is odd!");
}
else if((Math.sqrt(age)%2==0)) {
  console.log("You age is a perfect square!");
}
else {
  console.log("Your age is " + age);
}