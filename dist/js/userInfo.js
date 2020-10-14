//let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
//let user_time = sessionStorage.getItem("time");
//document.querySelector("span.name").innerHTML = user_name;

//document.querySelector("span.time_taken").innerHTML = user_time;
let pointop = 0;
if (user_points >= 287 && user_points <= 318) {
  console.log("1");
  pointop = 1;
}
if (user_points >= 255 && user_points <= 286) {
  console.log("2");
  pointop = 2;
}
if (user_points >= 223 && user_points <= 254) {
  console.log("3");
  pointop = 3;
}
if (user_points >= 191 && user_points <= 222) {
  console.log("4");
  pointop = 4;
}
if (user_points >= 159 && user_points <= 190) {
  console.log("5");
  pointop = 5;
}
if (user_points >= 127 && user_points <= 158) {
  console.log("6");
  pointop = 6;
}
if (user_points >= 95 && user_points <= 126) {
  console.log("7");
  pointop = 7;
}
if (user_points >= 63 && user_points <= 94) {
  console.log("8");
  pointop = 8;
}
if (user_points >= 31 && user_points <= 62) {
  console.log("9");
  pointop = 9;
}
if (user_points >= -51 && user_points <= 30) {
  pointop = 10;
  console.log("10");
}
document.querySelector("span.points").innerHTML = pointop;
if (pointop == 1) {
  document.querySelector(".msghere").innerHTML =
    "Well Done, You are a Professional";
} else {
  document.querySelector("span.prevscore").innerHTML = pointop - 1;
}
