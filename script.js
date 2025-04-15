function sayHi() {
  const greetings = [
    "☆大吉☆",
    "☆中吉☆",
    "☆小吉☆",
    "☆末吉☆"
  ];
  const index = Math.floor(Math.random() * greetings.length);
  document.getElementById("message").textContent = greetings[index];
}
