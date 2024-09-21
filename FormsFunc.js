// put your JS functions here

//function ....  // validate various form components{

function changeLogo() {
  // toggle logo

  var logo = document.getElementById("im");
  if (logo.src.includes("york.png")) {
    logo.src = "images/logo/LAS.png";
  } else {
    logo.src = "images/logo/york.png";
  }
}

function changeBackgroundColor() {
  document.getElementById("box").style.background = "#ADD8E6";
}

function otherProgram() {
  var aV = document.getElementById("program");
  var selectedValue = aV.options[aV.selectedIndex].value;

  if (selectedValue === "OTHER") {
    document.getElementById("other").style.display = "block";
    document.getElementById("other").focus();
  } else {
    document.getElementById("other").style.display = "none";
  }
}

function formValidation() {
  // check that first name isn't blank
  if (document.getElementById("firstName").value == "") {
    alert("First name should be filled out");
    document.getElementById("firstName").focus();
    return false;
  }

  // check that last name isn't blank
  if (document.getElementById("lastName").value == "") {
    alert("Last name should be filled out");
    document.getElementById("lastName").focus();
    return false;
  }

  // check that password isn't blank
  if (document.getElementById("password").value == "") {
    alert("Password should be filled out");
    document.getElementById("password").focus();
    return false;
  }

  // check that email isn't blank
  if (document.getElementById("email").value == "") {
    alert("email should be filled out");
    document.getElementById("email").focus();
    return false;
  } else {
    // check email format
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/
        ); // SELFNOTE this is the regexpression that is used across the web to check for email format, I modified the end for the lab
    }

    if (validateEmail(document.getElementById("email").value) == null) {
      alert("Email format invalid");
      document.getElementById("email").focus();
      return false;
    }
  }

  // check if atleast one hobby is selected

  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  if (checkboxes.length == 0) {
    alert("at least one hobby should be selected");
    document.getElementById("hobbies").focus();
    return false;
  }

  // check course code format
  const validateCourseCode = (courseCode) => {
    return courseCode === /^[A-Z]{4}[0-9]{4}$/.test(courseCode) || '' // SELFNOTE: needed to test for empty and the .test is what we use to compare regular expression
  };

  if(validateCourseCode(document.getElementById("courseCode").value) == null) {
    alert("Course code format should be 'EECS1234'");
    document.getElementById("courseCode").focus();
    return false;
  }
}
