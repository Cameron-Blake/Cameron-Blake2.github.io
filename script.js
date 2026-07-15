// Current day & time
function showDateTime() {
  const now = new Date();
  document.getElementById("currentTime").textContent = now.toLocaleString();
}
setInterval(showDateTime, 1000);


// JavaScript alert
function welcomeAlert() {
  alert("Welcome to Cameron's Recipe Collection! Enjoy exploring my favorite meals.");
}


// Math method (random tip)
function randomTip() {
  const tips = [
    "Always taste as you cook!",
    "Fresh herbs make a huge difference!",
    "Season your food at every stage.",
    "Let meat rest before cutting.",
    "Use sharp knives — they’re safer!"
  ];

  const index = Math.floor(Math.random() * tips.length);
  document.getElementById("tipBox").textContent = tips[index];
}
randomTip();


// Delay or interval
setInterval(randomTip, 10000);


// Convert number ↔ text
function toText(num) {
  return num.toString();
}


// Countdown function
function startCountdown(seconds) {
  let remaining = seconds;

  const timer = setInterval(() => {
    document.getElementById("countdownBox").textContent =
      toText(remaining) + " seconds";

    remaining--;

    if (remaining < 0) {
      clearInterval(timer);
      document.getElementById("countdownBox").textContent =
        "New recipes have arrived!";
    }
  }, 1000);
}

// Start a 20‑second homepage countdown
startCountdown(9999);
