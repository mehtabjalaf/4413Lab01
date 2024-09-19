/* 4413 24f Task 1 - write your code here */
//alert("Test");
function turnLightOn(lightNumber) {
  var aV = document.getElementById("light");
  aV.src = "images/light/light_" + lightNumber + ".jpg";
  document.getElementById("message").innerHTML =
    "light #" + lightNumber + " is on";
}
