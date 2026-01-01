# Portfolio Website

My personal portfolio showcasing projects, experience, and skills in DevOps, AI/ML, and cloud-native engineering.

**Live Site:** [Add your deployed URL here]

![Portfolio Preview](favicon-512.png)

## 🚀 About

A modern, minimal portfolio website built with vanilla HTML, CSS, and JavaScript. Features a dark cyberpunk aesthetic with terminal-inspired design elements that reflect my technical background and entrepreneurial mindset.

## ✨ Features

- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **Dark Theme** - Terminal-inspired aesthetic with cyan and green accents
- **Smooth Animations** - Scroll-triggered animations and smooth transitions
- **Project Showcase** - Featured projects with GitHub links and tech tags
- **Experience Timeline** - Visual timeline of work experience and internships
- **Skills Grid** - Organized display of technical skills and tools
- **Custom Favicon** - Unique `[VV]` terminal-style branding

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Fonts:** Fira Code (monospace), IBM Plex Sans
- **Design:** Custom CSS animations, CSS Grid, Flexbox
- **Icons:** SVG graphics

## 📂 Project Structure

```
portfolio/
├── portfolio.html          # Main HTML file
├── favicon.ico            # Browser favicon (32x32)
├── apple-touch-icon.png   # iOS icon (180x180)
├── android-chrome-192x192.png  # Android icon (192x192)
└── README.md              # This file
```

## 🎨 Design Philosophy

The design embraces a **developer-first aesthetic** with:
- Dark background (#0f0f23) for reduced eye strain
- Cyan (#00d9ff) and green (#4ade80) accent colors
- Monospace fonts for that code-editor feel
- Terminal-style elements (prompts, brackets, cursors)
- Minimalist approach - letting content shine

## 🚢 Deployment

### Option 1: GitHub Pages
1. Fork/clone this repository
2. Go to Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/portfolio`

### Option 2: Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo for automatic deployments

### Option 3: Vercel
1. Import project from GitHub
2. Deploy with zero configuration

## 🔧 Customization

### Update Personal Information
Edit `portfolio.html` and replace:
- **Name & Title:** Line 205-206
- **Description:** Line 208-212
- **Contact Links:** Lines 890-910
- **GitHub Username:** Footer and contact section

### Change Colors
In the CSS `:root` section (lines 17-26), update:
```css
--bg: #0f0f23;           /* Background color */
--accent: #00d9ff;       /* Cyan accent */
--accent-warm: #ff6b6b;  /* Warm accent */
--accent-green: #4ade80; /* Green accent */
```

### Add Projects
In the projects section, add a new project card:
```html
<div class="project-card">
    <div class="project-header">
        <a href="GITHUB_REPO_URL" target="_blank">→</a>
    </div>
    <h3>Project Name</h3>
    <p>Project description here...</p>
    <div class="work-tags">
        <span class="tag">Tech1</span>
        <span class="tag">Tech2</span>
    </div>
</div>
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to fork and customize for your own portfolio!

## 🤝 Connect

- **GitHub:** [@euphoricfenix](https://github.com/euphoricfenix)
- **LinkedIn:** [virajvirk](https://linkedin.com/in/virajvirk)
- **Email:** virajvirk7@gmail.com

---

**Built with ☕ and late-night debugging sessions**

If you found this helpful or used it for your own portfolio, consider giving it a ⭐!