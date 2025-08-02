# 🏋️ FitCozy - Personal Gym Tracker

A beautiful, cozy, and aesthetic web application for tracking your daily gym exercises and fitness activities.

![FitCozy Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=FitCozy+Gym+Tracker)

## ✨ Features

### 🎨 **Beautiful Design**
- Cozy gradient backgrounds with glass morphism effects
- Smooth animations and hover interactions
- Responsive design for mobile and desktop
- Modern typography with Inter font family

### 💪 **Exercise Tracking**
- Add exercises with name, type, duration, intensity, and calories
- Exercise categories: Strength 💪, Cardio 🏃, Flexibility 🧘, Sports ⚽
- Intensity levels: Low 😌, Moderate 😊, High 🔥, Extreme 🚀
- Real-time exercise logging with timestamps

### 📊 **Progress Monitoring**
- Daily stats dashboard showing exercises, minutes, and calories
- Visual progress bar toward daily goal (60 minutes)
- Today's exercise history with delete functionality
- Automatic cleanup of exercises older than 7 days

### 🌟 **User Experience**
- Motivational quotes that rotate every 30 seconds
- Success messages with celebration emojis
- Smooth scrolling and intuitive interface
- Local storage for data persistence

## 🚀 Quick Start

### Option 1: Download and Run Locally
1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start tracking your exercises!

### Option 2: Deploy to GitHub Pages
1. Create a new repository on GitHub
2. Upload these files to your repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose `main`
5. Your app will be live at `https://yourusername.github.io/repository-name`

### Option 3: Deploy to Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Get an instant live URL
3. Optionally connect to GitHub for continuous deployment

## 📁 File Structure

```
fitcozy/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients, animations, and glass morphism
- **Vanilla JavaScript** - No frameworks, pure JS functionality
- **Local Storage** - Data persistence across sessions
- **Google Fonts** - Inter font family for beautiful typography

## 🎯 Usage

1. **Add Exercise**: Fill in the form with exercise details and click "Add Exercise"
2. **View Stats**: See your daily progress in the stats dashboard
3. **Track Progress**: Watch your progress bar fill up toward the daily goal
4. **Review History**: Check all exercises logged for today
5. **Stay Motivated**: Enjoy rotating motivational quotes

## 🎨 Customization

### Change Daily Goal
Edit the `dailyGoal` variable in `script.js`:
```javascript
let dailyGoal = 90; // Change to your preferred minutes
```

### Add More Exercise Types
Modify the options in `index.html` and update emojis in `script.js`:
```javascript
const emojis = {
    'strength': '💪',
    'cardio': '🏃',
    'flexibility': '🧘',
    'sports': '⚽',
    'yoga': '🕉️'  // Add new type
};
```

### Customize Colors
Update the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #your-color 0%, #your-color 100%);
```

## 📱 Mobile Responsive

The app is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔐 Privacy

- All data is stored locally in your browser
- No data is sent to external servers
- Automatic cleanup of old data (7+ days)
- No tracking or analytics

## 🐛 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share your modifications

## 💝 Support

If you find this app helpful, consider:
- ⭐ Starring this repository
- 🐛 Reporting issues
- 💡 Suggesting improvements
- 📢 Sharing with friends

---

**Made with ❤️ for fitness enthusiasts**

Start your fitness journey today with FitCozy! 🏋️‍♀️💪