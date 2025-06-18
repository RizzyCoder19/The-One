// script.js
function startHeartRain() {
  const canvas = document.getElementById('heartCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = 300;

  const hearts = [];
  const heartCount = 100;

  for (let i = 0; i < heartCount; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 15 + 5,
      speed: Math.random() * 2 + 1
    });
  }

  function drawHeart(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size, x - size, y - size, x - size, y);
    ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 2);
    ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
    ctx.bezierCurveTo(x + size, y - size, x, y - size, x, y);
    ctx.fillStyle = '#ff69b4';
    ctx.fill();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => {
      drawHeart(heart.x, heart.y, heart.size);
      heart.y += heart.speed;
      if (heart.y > canvas.height) {
        heart.y = -heart.size;
        heart.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(animate);
  }

  animate();
}

function revealSurprise() {
  const box = document.getElementById('surprise-box');
  box.style.display = 'block';
  box.scrollIntoView({ behavior: 'smooth' });
}
