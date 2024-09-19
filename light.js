/* 4413 24f Task 1 - write your code here */
//alert("Test");
function lightOneOn() {
  /* set image src to be that for light 1, and set message texts to be "light #1 is on"  */
  var aV = document.getElementById("light");
  aV.src = "images/light/light_1.jpg";
  document.getElementById("message").innerHTML = "light #1 is on";
}

function lightTwoOn() {
  /* set image src to be that for light 1, and set message texts to be "light #1 is on"  */
  var aV = document.getElementById("light");
  aV.src = "images/light/light_2.jpg";
  document.getElementById("message").innerHTML = "light #2 is on";
}

function lightThreeOn() {
  /* set image src to be that for light 1, and set message texts to be "light #1 is on"  */
  var aV = document.getElementById("light");
  aV.src = "images/light/light_3.jpg";
  document.getElementById("message").innerHTML = "light #3 is on";
}

function lightFourOn() {
  /* set image src to be that for light 1, and set message texts to be "light #1 is on"  */
  var aV = document.getElementById("light");
  aV.src = "images/light/light_4.jpg";
  document.getElementById("message").innerHTML = "light #4 is on";
}

function lightFiveOn() {
  /* set image src to be that for light 1, and set message texts to be "light #1 is on"  */
  var aV = document.getElementById("light");
  aV.src = "images/light/light_5.jpg";
  document.getElementById("message").innerHTML = "light #5 is on";
}

function turnLightOn(lightNumber) {
  var aV = document.getElementById("light");
  aV.src = "images/light/light_" + lightNumber + ".jpg";
  document.getElementById("message").innerHTML =
    "light #" + lightNumber + " is on";
}
