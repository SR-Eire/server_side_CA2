var i, intro, speed;

i = 0;
intro = "Welcome to the PhoneShop website!!"; /* The text */
speed = 100; /* The speed/duration of the effect in milliseconds */

document.addEventListener("turbolinks:load", function typeWriter() {
  if (i < intro.length) {
    document.getElementById("intro").innerHTML += intro.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
});
