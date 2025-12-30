// MUSIC PERSISTENCE (continues playing across pages)
let music = document.getElementById("bgMusic");
let currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Check if we're on the unlocked 2026 page - stop music there
let unlock = document.getElementById("unlock");
let isUnlocked2026 = false;

if (unlock) {
  let unlockDate = new Date("2026-01-01T00:00:00");
  let now = new Date();
  if (now >= unlockDate) {
    isUnlocked2026 = true;
    // Stop music on unlocked 2026 page
    if (music) {
      music.pause();
      music.currentTime = 0;
    }
    localStorage.setItem('musicPlaying', 'false');
  }
}

// Continue music on all other pages if it was playing
if (music && !isUnlocked2026) {
  music.volume = 0.3;
  
  // Check if music should be playing from localStorage
  let shouldPlay = localStorage.getItem('musicPlaying') === 'true';
  
  if (shouldPlay) {
    // Try to resume from stored time
    let storedTime = localStorage.getItem('musicTime');
    if (storedTime) {
      music.currentTime = parseFloat(storedTime);
    }
    music.play().catch(()=>{});
    
    // Update stored time periodically
    setInterval(() => {
      if (!music.paused) {
        localStorage.setItem('musicTime', music.currentTime.toString());
      }
    }, 1000);
  }
}

// SECRET MESSAGE LOGIC
let clickCount = 0;
let secretImg = document.getElementById("secretImage");

if (secretImg) {
  secretImg.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 5) {
      document.getElementById("secretMessage").classList.add("show");
    }
  });
}

// AUTO UNLOCK 2026 & COUNTDOWN
let locked = document.getElementById("locked");
let countdownEl = document.getElementById("countdown");
let nyOverlay = document.getElementById("nyOverlay");
let nyCloseBtn = document.getElementById("nyCloseBtn");

function showNewYearOverlay() {
  if (nyOverlay) {
    nyOverlay.classList.add("show");
  }
}

if (nyCloseBtn && nyOverlay) {
  nyCloseBtn.addEventListener("click", () => {
    nyOverlay.classList.remove("show");
  });
}

if (unlock && locked) {
  let unlockDate = new Date("2026-01-01T00:00:00");
  let now = new Date();

  if (now >= unlockDate) {
    locked.style.display = "none";
    unlock.style.display = "block";
    showNewYearOverlay();
    // Stop music when 2026 page is unlocked (already handled above, but ensure it's stopped)
    if (music) {
      music.pause();
      music.currentTime = 0;
    }
    localStorage.setItem('musicPlaying', 'false');
  } else if (countdownEl) {
    // Update countdown every second
    function updateCountdown() {
      let now = new Date();
      let diff = unlockDate - now;
      
      if (diff > 0) {
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        countdownEl.innerHTML = `${days} days, ${hours}h ${minutes}m ${seconds}s`;
      } else {
        locked.style.display = "none";
        unlock.style.display = "block";
        showNewYearOverlay();
        // Stop music when countdown reaches zero
        if (music) {
          music.pause();
          music.currentTime = 0;
        }
        localStorage.setItem('musicPlaying', 'false');
      }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
}

// TIMELINE SCROLL ANIMATIONS
let fadeElements = document.querySelectorAll(".fade-in");

if (fadeElements.length > 0) {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
}

// IMAGE LIGHTBOX & MASONRY LAYOUT
let galleryImgs = document.querySelectorAll(".gallery-img");

if (galleryImgs.length > 0) {
  // Create lightbox
  let lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  let lightboxImg = document.createElement("img");
  lightbox.appendChild(lightboxImg);
  document.body.appendChild(lightbox);

  // Calculate masonry row spans based on image heights
  function calculateMasonryLayout() {
    const rowHeight = 5; // Grid row height in pixels (match CSS grid-auto-rows)
    const gap = 4; // Gap between items (match CSS gap)
    
    galleryImgs.forEach(img => {
      img.addEventListener('load', function() {
        const imgHeight = this.naturalHeight;
        const imgWidth = this.naturalWidth;
        if (!imgWidth || !imgHeight) return;
        const containerWidth = this.offsetWidth || 250; // Approx column width
        const aspectRatio = imgHeight / imgWidth;
        const displayHeight = containerWidth * aspectRatio;
        const rowSpan = Math.max(1, Math.ceil((displayHeight + gap) / rowHeight));
        this.style.gridRowEnd = `span ${rowSpan}`;
      });
      
      // If image already loaded
      if (img.complete) {
        const imgHeight = img.naturalHeight;
        const imgWidth = img.naturalWidth;
        if (!imgWidth || !imgHeight) return;
        const containerWidth = img.offsetWidth || 250;
        const aspectRatio = imgHeight / imgWidth;
        const displayHeight = containerWidth * aspectRatio;
        const rowSpan = Math.max(1, Math.ceil((displayHeight + gap) / rowHeight));
        img.style.gridRowEnd = `span ${rowSpan}`;
      }
    });

    // Lightbox functionality
    galleryImgs.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("show");
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("show");
    });
  }

  // Initialize masonry layout
  calculateMasonryLayout();
  
  // Recalculate on window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(calculateMasonryLayout, 250);
  });
}

// FLOATING HEARTS ANIMATION
function createFloatingHeart() {
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '🖤'];
  const heart = document.createElement('div');
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.bottom = '-50px';
  heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '1';
  heart.style.transition = 'all 8s linear';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = 'translateY(-100vh) rotate(' + (Math.random() * 360) + 'deg)';
    heart.style.opacity = '0';
  }, 10);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// Create floating hearts periodically (only on index and timeline pages)
if (currentPage === 'index.html' || currentPage === 'timeline.html') {
  setInterval(createFloatingHeart, 3000);
}

// LOVE QUOTES SYSTEM - Personalized for Golu 💕
const loveQuotes = [
  "Golu, in you I found my forever and always. 💕",
  "Every moment with you, Golu, is a memory I treasure. 🖤",
  "Golu, you are my today and all of my tomorrows. ❤️",
  "Love is not about how many days we've been together. It's about how much I love you, Golu, every single day. 💖",
  "Golu, I choose you. And I'll choose you, over and over and over. Without pause, without a doubt, in a heartbeat. 💗",
  "Golu, you are my sun, my moon, and all my stars. ✨",
  "I never want to stop making memories with you, Golu. 💝",
  "Golu, you are my favorite place to go when my mind searches for peace. 🌸",
  "Being with you, Golu, makes me feel like I can do anything. 💕",
  "Golu, you are my heart, my life, my one and only thought. 🖤",
  "I love you, Golu, not only for what you are, but for what I am when I am with you. ❤️",
  "Every love story is beautiful, but ours with you, Golu, is my favorite. 💖",
  "Golu, you are my today and all of my tomorrows. 💗",
  "Golu, I want to grow old with you. 💝",
  "Golu, you make my heart skip a beat every single day. 💕",
  "For Golu: Through every version of life, I would still choose you. 🖤",
  "Golu, you're not just my girlfriend, you're my best friend and my home. 💕",
  "Every day with you, Golu, feels like a beautiful dream. ✨"
];

function showRandomQuote() {
  const quoteEl = document.getElementById('randomQuote');
  if (quoteEl) {
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    quoteEl.textContent = randomQuote;
  }
}

// Show random quote on page load
showRandomQuote();

// Change quote every 10 seconds
setInterval(showRandomQuote, 10000);

