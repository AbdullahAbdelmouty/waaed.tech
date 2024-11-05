// Set the countdown duration in seconds (for example, 1 hour = 3600 seconds)
let countdownDuration = 60 * 60; // 1 hour

function startCountdown(duration, display) {
  let timer = duration;
  const interval = setInterval(() => {
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    // Display the time in HH:MM:SS format
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Stop the timer when it reaches 0
    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = "Time's Up!";
    }
  }, 1000);
}

// Initialize the countdown on page load
window.onload = function () {
  const display = document.getElementById('timer');
  startCountdown(countdownDuration, display);
};

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}
