function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  //  let user_age = document.querySelector(".welcome_form.active").innerHTML;

  sessionStorage.setItem("points", points);
  //console.log(user_age);

  location.href = "quiz.html";
}
// AOS Instance
//AOS.init();
let points = 0;
function onepoint() {
  points += -90;
  console.log(points + "firstpoint");
}
function twopoint() {
  points += -30;
  console.log(points + "secpoint");
}
function threepoint() {
  points += 12;
  console.log(points + "3point");
}
function fourpoint() {
  points += 30;
  console.log(points + "4point");
}
function fivepoint() {
  points += 48;
  console.log(points + "5point");
}
function sixpoint() {
  points += 40;
  console.log(points + "6point");
}
function sevenpoint() {
  points += 15;
  console.log(points + "7oint");
}
function eightpoint() {
  points += 9;
  console.log(points + "8oint");
}

sessionStorage.setItem("points", points);
