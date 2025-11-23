# 🎯 Touch Typing Tutor

A modern, bilingual touch typing application supporting both **Arabic** and **English**. Learn to type without looking at the keyboard through scientifically structured lessons.

## ✨ Features

- 🌍 **Bilingual Support**: Full support for Arabic and English
- 📚 **Progressive Learning**: 5 levels with carefully designed lessons
- ⌨️ **Visual Keyboard**: Color-coded virtual keyboard showing finger positions
- 📊 **Real-time Stats**: Track your speed (WPM), accuracy, and errors
- 💾 **Cloud Sync**: Progress saved to Firebase Firestore
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Beautiful UI**: Modern gradient design with smooth animations

## 🚀 Getting Started

### Firebase Setup

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable **Firestore Database** (Start in production mode)
   - Enable **Authentication** > Sign-in method > Anonymous

2. **Get Firebase Credentials**
   - Go to Project Settings > General
   - Scroll to "Your apps" > Web app
   - Copy the configuration object

3. **Update Configuration**
   - Open `firebase-config.js`
   - Replace the placeholder values with your actual Firebase credentials:
     ```javascript
     const firebaseConfig = {
         apiKey: "YOUR_ACTUAL_API_KEY",
         authDomain: "your-project.firebaseapp.com",
         projectId: "your-project-id",
         storageBucket: "your-project.appspot.com",
         messagingSenderId: "123456789",
         appId: "your-app-id"
     };
     ```

4. **Deploy Firestore Rules**
   - Go to Firebase Console > Firestore Database > Rules
   - Copy the contents of `firestore.rules` and paste it
   - Click "Publish"

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"
   - Your app will be live in seconds!

### Local Development

```bash
# Open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

## 📖 How to Use

1. **Select Language**: Choose Arabic or English
2. **Choose a Lesson**: Start with Level 1, Lesson 1
3. **Practice**: Follow the on-screen keyboard and type the displayed text
4. **Track Progress**: Monitor your WPM and accuracy
5. **Complete Lesson**: Achieve the minimum accuracy and speed to unlock next lessons

## 🏗️ Technology Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Database**: Firebase Firestore
- **Authentication**: Firebase Anonymous Auth
- **Hosting**: Vercel
- **Design**: Modern CSS with gradients and animations

## 📊 Lesson Structure

### English
- **Level 1**: Home row keys (ASDF, JKL;)
- **Level 2**: Top row keys (QWERTY, UIOP)
- **Level 3**: Bottom row and complete alphabet
- **Level 4**: Numbers and symbols
- **Level 5**: Real-world practice with sentences and paragraphs

### Arabic
- **Level 1**: الصف الرئيسي (شسيب، نتمك)
- **Level 2**: حروف إضافية (فقع، لاه)
- **Level 3**: جميع الحروف
- **Level 4**: الأرقام وعلامات الترقيم
- **Level 5**: تمرينات عملية

## 🔒 Security

- Anonymous authentication for user privacy
- Firestore rules ensure users can only access their own data
- No personal information required

## 📄 License

MIT License - feel free to use this project for personal or educational purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

Made with ❤️ for learners worldwide
