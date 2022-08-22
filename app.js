let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homePoints = 0;
let guestPoints = 0;

function hmOne() {
  homePoints += 1;
  homeScore.textContent = homePoints;
}
function hmTwo() {
  homePoints += 2;
  homeScore.textContent = homePoints;
}
function hmThree() {
  homePoints += 3;
  homeScore.textContent = homePoints;
}
function gstOne() {
  guestPoints += 1;
  guestScore.textContent = guestPoints;
}
function gstTwo() {
  guestPoints += 2;
  guestScore.textContent = guestPoints;
}
function gstThree() {
  guestPoints += 3;
  guestScore.textContent = guestPoints;
}

function resetBtn() {
  homePoints = 0;
  guestPoints = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
