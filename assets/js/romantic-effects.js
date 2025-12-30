// ROMANTIC EFFECTS FOR GOLU 💕

// Live Countdown Timer - Days, Hours, Minutes, Seconds Together
function calculateTimeTogether() {
  const startDate = new Date("2023-06-01T00:00:00"); // June 1st, 2023
  const now = new Date();
  const diffTime = now - startDate;
  
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
}

function displayDaysCounter() {
  const counterEl = document.getElementById('daysCounter');
  if (counterEl) {
    const time = calculateTimeTogether();
    counterEl.innerHTML = `
      <div class="days-counter-content">
        <div class="time-display">
          <div class="time-unit">
            <span class="time-number">${time.days}</span>
            <span class="time-label">Days</span>
          </div>
          <span class="time-separator">:</span>
          <div class="time-unit">
            <span class="time-number">${String(time.hours).padStart(2, '0')}</span>
            <span class="time-label">Hours</span>
          </div>
          <span class="time-separator">:</span>
          <div class="time-unit">
            <span class="time-number">${String(time.minutes).padStart(2, '0')}</span>
            <span class="time-label">Minutes</span>
          </div>
          <span class="time-separator">:</span>
          <div class="time-unit">
            <span class="time-number">${String(time.seconds).padStart(2, '0')}</span>
            <span class="time-label">Seconds</span>
          </div>
        </div>
        <span class="days-text">Together with Golu since June 1st, 2023 💕</span>
      </div>
    `;
  }
}

// Falling Hearts Animation
function createFallingHeart() {
  const hearts = ['💕', '💖', '💗', '💝', '❤️', '🖤', '💜', '🤍'];
  const heart = document.createElement('div');
  heart.className = 'falling-heart';
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// Romantic Cursor Trail
let cursorTrail = [];
const maxTrailLength = 8;

function createCursorHeart(e) {
  const heart = document.createElement('div');
  heart.className = 'cursor-heart';
  heart.textContent = '💕';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  document.body.appendChild(heart);
  
  cursorTrail.push(heart);
  if (cursorTrail.length > maxTrailLength) {
    const oldHeart = cursorTrail.shift();
    if (oldHeart && oldHeart.parentNode) {
      oldHeart.remove();
    }
  }
  
  setTimeout(() => {
    heart.style.opacity = '0';
    heart.style.transform = 'translate(-50%, -50%) scale(0)';
    setTimeout(() => {
      if (heart.parentNode) {
        heart.remove();
      }
    }, 300);
  }, 500);
}

// Hidden Love Messages (Click to reveal)
function createHiddenMessages() {
  const messages = [
    "I love you, Golu 💕",
    "You're my favorite person",
    "Every day with you is special",
    "Golu, you make everything better",
    "I'm so lucky to have you",
    "You're beautiful inside and out",
    "Golu, my heart belongs to you",
    "Forever yours 💕"
  ];
  
  // Create hidden message elements
  const hiddenMsg = document.createElement('div');
  hiddenMsg.className = 'hidden-message';
  hiddenMsg.style.display = 'none';
  hiddenMsg.innerHTML = `<p>${messages[Math.floor(Math.random() * messages.length)]}</p>`;
  document.body.appendChild(hiddenMsg);
  
  let clickCount = 0;
  document.addEventListener('click', function(e) {
    // Don't trigger on buttons or links
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
      return;
    }
    
    clickCount++;
    if (clickCount % 7 === 0) { // Show message every 7th click
      hiddenMsg.textContent = messages[Math.floor(Math.random() * messages.length)];
      hiddenMsg.style.left = e.clientX + 'px';
      hiddenMsg.style.top = e.clientY + 'px';
      hiddenMsg.style.display = 'block';
      
      setTimeout(() => {
        hiddenMsg.style.opacity = '0';
        setTimeout(() => {
          hiddenMsg.style.display = 'none';
          hiddenMsg.style.opacity = '1';
        }, 500);
      }, 2000);
    }
  });
}

// Rose Petals Animation
function createRosePetal() {
  const petal = document.createElement('div');
  petal.className = 'rose-petal';
  petal.innerHTML = '🌹';
  petal.style.left = Math.random() * 100 + '%';
  petal.style.animationDuration = (Math.random() * 4 + 5) + 's';
  petal.style.opacity = Math.random() * 0.4 + 0.3;
  petal.style.fontSize = (Math.random() * 10 + 12) + 'px';
  
  document.body.appendChild(petal);
  
  setTimeout(() => {
    petal.remove();
  }, 10000);
}

// Sparkle Effect
function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle-effect';
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  document.body.appendChild(sparkle);
  
  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

// Initialize all romantic effects
document.addEventListener('DOMContentLoaded', function() {
  // Days counter
  displayDaysCounter();
  
  // Falling hearts (every 2 seconds)
  setInterval(createFallingHeart, 2000);
  
  // Rose petals (every 5 seconds)
  setInterval(createRosePetal, 5000);
  
  // Cursor trail
  document.addEventListener('mousemove', createCursorHeart);
  
  // Hidden messages
  createHiddenMessages();
  
  // Sparkles on click
  document.addEventListener('click', function(e) {
    if (Math.random() > 0.7) { // 30% chance
      createSparkle(e.clientX, e.clientY);
    }
  });
});

// Update countdown every second for live timer
setInterval(displayDaysCounter, 1000); // Update every second

