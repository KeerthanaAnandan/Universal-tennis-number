let user_points = sessionStorage.getItem("points");

let pointop = 0;
if (user_points >= 287 && user_points <= 318) {
  pointop = 1;
}
if (user_points >= 255 && user_points <= 286) {
  pointop = 2;
}
if (user_points >= 223 && user_points <= 254) {
  pointop = 3;
}
if (user_points >= 191 && user_points <= 222) {
  pointop = 4;
}
if (user_points >= 159 && user_points <= 190) {
  pointop = 5;
}
if (user_points >= 127 && user_points <= 158) {
  pointop = 6;
}
if (user_points >= 95 && user_points <= 126) {
  pointop = 7;
}
if (user_points >= 63 && user_points <= 94) {
  pointop = 8;
}
if (user_points >= 31 && user_points <= 62) {
  pointop = 9;
}
if (user_points >= -51 && user_points <= 30) {
  pointop = 10;
}
document.querySelector("span.points").innerHTML = pointop;
if (pointop == 1) {
  document.querySelector(".msghere").innerHTML =
    "Well Done, You are a Professional";
} else {
  document.querySelector("span.prevscore").innerHTML = pointop - 1;
}
