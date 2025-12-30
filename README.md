# 💕 Our Love Story - For Golu

A beautiful, romantic website dedicated to our love story, featuring memories, timeline, and special moments.

## 🌟 Features

- **Personalized for Golu** - Every page includes special messages
- **Live Countdown** - Days, hours, minutes, seconds together since June 1st, 2023
- **Romantic Animations** - Falling hearts, rose petals, cursor trail, sparkles
- **Interactive Gallery** - Beautiful masonry layout with 31+ memories
- **Timeline** - Our journey from 2023 to 2025
- **Video Section** - Our story compilation
- **New Year 2026 Wish** - Special page that unlocks on January 1st, 2026
- **Hidden Messages** - Click around to discover secret love messages
- **Background Music** - Romantic music that plays throughout

## 🚀 Deployment on Netlify

### Step 1: Go to Netlify
1. Visit [netlify.com](https://www.netlify.com)
2. Sign up/Login with your GitHub account

### Step 2: Deploy from GitHub
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify to access your GitHub
4. Select repository: **`new-year-2026`**
5. Click **"Deploy site"**

### Step 3: Configure Build Settings
- **Build command:** Leave empty (no build needed)
- **Publish directory:** `our-story` (or leave as root if files are in root)
- **Base directory:** Leave empty

### Step 4: Deploy!
Netlify will automatically deploy your site. You'll get a URL like:
`https://your-site-name.netlify.app`

### Step 5: Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow DNS configuration instructions

## 📁 Project Structure

```
our-story/
├── index.html          # Home page
├── timeline.html       # Timeline page
├── gallery.html        # Memories gallery
├── video.html          # Video page
├── newyear2026.html    # New Year wish page
├── assets/
│   ├── css/
│   │   └── style.css   # All styles
│   ├── js/
│   │   ├── main.js     # Main functionality
│   │   └── romantic-effects.js  # Romantic animations
│   ├── images/         # All photos
│   └── music/          # Background music
└── README.md
```

## 🎨 Customization

### Update Start Date
Edit `assets/js/romantic-effects.js` line 4:
```javascript
const startDate = new Date("2023-06-01T00:00:00");
```

### Add More Photos
1. Add images to `assets/images/`
2. Add them to `gallery.html`:
```html
<img src="assets/images/your-photo.jpg" class="gallery-img" alt="Memory">
```

### Add Video
Edit `video.html` and uncomment/add your video:
```html
<video controls>
  <source src="assets/videos/our-story.mp4" type="video/mp4">
</video>
```

## 💕 Special Features

- **Falling Hearts** - Continuous animation
- **Cursor Trail** - Hearts follow mouse
- **Hidden Messages** - Click anywhere (every 7th click)
- **Rose Petals** - Gentle falling animation
- **Sparkles** - Random sparkle effects
- **Live Countdown** - Real-time togetherness timer
- **New Year Overlay** - Special message on Jan 1st, 2026

## 🎵 Music

Background music: `dooron-dooron.mp3`
- Starts when clicking "Start Our Journey"
- Continues across all pages
- Pauses on video page
- Stops on unlocked 2026 page

## 📱 Mobile Responsive

The website is fully responsive and works beautifully on:
- Desktop
- Tablet
- Mobile phones

## 🖤 Made with Love

This website is a special gift, created with care and dedication for Golu.

---

**Repository:** https://github.com/Nirotyay1302/new-year-2026.git  
**Live Site:** (Will be available after Netlify deployment)
