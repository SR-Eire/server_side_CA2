var today = new Date();
var hourNow = today.getHours();
var greeting;

document.addEventListener("turbolinks:load", function timeOfDayGreeting() {
  if (hourNow > 18) {
    greeting = "Good Evening!";
  }
  else if (hourNow > 12) {
    greeting = "Good Afternoon!";
  }
  else if (hourNow > 00) {
    greeting = "Good Morning!";
  }
  else {
    greeting = "Welcome!";
  }

  document.getElementById("greeting").innerHTML += greeting;
});
