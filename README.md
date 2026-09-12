# NeuroNortheast - Cognitive Gaming & Memory Assistance Platform

**Problem Statement:** AI-Based Cognitive Gaming and Memory Assistance Platform for Elderly Dementia Patients in North Eastern Region (NER).

This is a React + Vite web application built specifically with dementia accessibility in mind. It features a **"Zero Learning Curve" UX**, localized North Eastern Region (NER) culturally-relevant content, persistent offline-first data storage, and voice-controlled navigation.

---

## 🎯 Key Features

- **Voice-First Navigation:** Tap-to-speak commands ("play game", "remind me", "show family")
- **Cognitive Games:** Memory matching with dynamic difficulty adjustment
- **Daily Reminders:** Medication & activity tracker
- **Caregiver Dashboard:** Performance trends and activity insights
- **Offline-First:** Works without internet; syncs data when online
- **Accessible Design:** Large buttons, high contrast, simple language

---

## 🏗️ System Architecture

### Application Flow

```
                          ELDERLY USER
                              ↓
                    ┌─────────────────────┐
                    │  Mobile/Web App     │
                    │  Simple UI + Voice  │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Cognitive Games     │
                    │ Memory Assistance   │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ AI Personalization  │
                    │ Engine              │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ User Performance    │
                    │ & Activity Data     │
                    │ (localStorage)      │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Caregiver Dashboard │
                    │ (Family View)       │
                    └─────────────────────┘
```

---

## 🧠 AI Personalization Flow

```
        ┌──────────────────┐
        │ User Plays Game  │
        └────────┬─────────┘
                 ↓
        ┌──────────────────────────┐
        │ Collect Performance Data │
        │ - Accuracy               │
        │ - Time Taken             │
        │ - Attempts               │
        └────────┬─────────────────┘
                 ↓
        ┌──────────────────────┐
        │ AI Analyzes Results  │
        └────────┬─────────────┘
                 ↓
        ┌──────────────────────────────┐
        │ Adjust Difficulty Level      │
        │ (Success → Harder)           │
        │ (Failure → Easier)           │
        └────────┬─────────────────────┘
                 ↓
        ┌──────────────────────┐
        │ Recommend Next Game  │
        └────────┬─────────────┘
                 ↓
        ┌──────────────────────┐
        │ Store New Data &     │
        │ Continue Loop        │
        └──────────────────────┘
```

---

## 🛠️ Architecture Notes

### Offline-First Design
- State is managed locally via **React Context** and **`localStorage`**
- In a real-world scenario, this maps to SQLite/Room for persistent mobile storage
- Data syncs automatically when connectivity is restored

### Voice AI Integration
- Uses native browser **Web Speech API** (SpeechRecognition & SpeechSynthesis)
- Completely free, on-device NLP — no cloud dependency
- Post-hackathon, this module is structured for easy swap to cloud-based TTS/STT services

### UI Accessibility
- **Tailwind CSS** with custom NER color scheme:
  - `ner-earth` (#8B5A2B) — warm, comforting brown
  - `ner-green` (#4A7c59) — calm, natural green
  - `ner-soft` (#F4F1EA) — low-contrast background
  - `ner-accent` (#D97736) — warm orange for call-to-action

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx              # Landing screen with main navigation
│   ├── Game.jsx              # Memory matching game with AI difficulty
│   ├── Reminders.jsx         # Daily medication & activity reminders
│   └── Dashboard.jsx         # Caregiver view with performance charts
│
├── components/
│   └── VoiceAssistant.jsx    # Persistent voice command handler
│
├── App.jsx                   # Main routing logic (state-based navigation)
├── main.jsx                  # React root mount
└── index.css                 # Global Tailwind styles

Configuration Files
├── package.json              # Dependencies (React 19, Vite)
├── vite.config.js            # Vite + React plugin setup
├── tailwind.config.js        # Custom NER color theme
└── index.html                # HTML root container
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Setup & Run Locally

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Lint code
npm lint
```

### Environment Setup
No environment variables required for the MVP — everything runs locally in the browser.

---

## 📦 Deployment

### Vercel (Recommended)
1. Push repository to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project" → Import from GitHub
4. Configure:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Deploy

### Netlify
1. Push repository to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git" → Connect GitHub
4. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Deploy

### Docker (Optional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 🔄 Data Flow Explained

1. **User Interaction:** Elderly user taps game button or speaks voice command
2. **Game Logic:** React state tracks card flips, matches, and performance metrics
3. **Performance Capture:** Accuracy, time, and attempts stored in `localStorage`
4. **AI Adjustment:** Game difficulty tweaked based on success/failure patterns
5. **Dashboard Sync:** Caregiver can view performance trends and activity history
6. **Offline Sync:** When online, data can be pushed to a backend service (future)

---

## 🧪 Testing & Quality

- **Linting:** `npm run lint` (oxlint configured)
- **Manual Testing:** Test voice commands in Chrome/Edge (Safari has limited Web Speech API support)
- **Accessibility:** Tested with large fonts, high contrast, and touch-friendly targets

---

## 📋 Roadmap

**Post-Hackathon Enhancements:**
- [ ] Backend integration (Node.js/Express + PostgreSQL)
- [ ] Real-time caregiver alerts
- [ ] Multi-language support (Assamese, Bengali, Manipuri)
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Cloud-based voice AI

---

## 📄 License

This project is part of the Smart India Hackathon (SIH) 2024. All rights reserved.

---

## 👥 Contributors

- **NeuroNortheast Team** - SIH Prototype Development

---

## 📞 Support & Feedback

For issues, suggestions, or feedback, please open a GitHub issue or contact the development team.
