const balloon = document.getElementById("balloon");
const message = document.getElementById("message");
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

balloon.addEventListener("click", () => {
  balloon.style.display = "none";
  message.classList.remove("hidden");
  message.style.display = "block";
  launchConfetti();
});

// Simple confetti effect
function launchConfetti() {
  const confetti = [];
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 5 + 2,
      color:
        "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)",
      tilt: Math.floor(Math.random() * 10) - 10,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
      ctx.beginPath();
      ctx.fillStyle = c.color;
      ctx.fillRect(c.x, c.y, c.r, c.r);
      c.y += c.d;
      c.x += Math.sin(c.tilt);
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(draw);
  }

  draw();
}
