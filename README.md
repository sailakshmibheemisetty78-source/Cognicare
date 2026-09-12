# NeuroNortheast - SIH Prototype

**Problem Statement:** AI-Based Cognitive Gaming and Memory Assistance Platform for Elderly Dementia Patients in North Eastern Region (NER).

This prototype is a React + Vite web application built specifically with dementia accessibility in mind. It features "Zero Learning Curve" UX, localized North Eastern Region (NER) elements, a persistent voice assistant, cognitive gaming, and an offline-first architecture.

## Architecture Notes
- **Offline-First Design:** For the hackathon MVP, state is managed locally via React Context and `localStorage`. In a real-world scenario, this will map to SQLite/Room for local device storage, syncing to Firebase/Supabase only when an internet connection is available (crucial for remote NER areas).
- **Voice AI:** Currently utilizes the native browser `Web Speech API` (SpeechRecognition and SpeechSynthesis) for free, on-device NLP. Post-hackathon, this module is structured to be easily swapped with the **Govt of India Bhashini API** for robust Assamese/Bodo/Manipuri translation and voice processing.

##Technical Approach  
              ELDERLY USER
                   ↓
        ┌────────────────────┐
        │ Mobile/Web App     │
        │ Simple UI + Voice  │
        └─────────┬──────────┘
                  ↓
        ┌────────────────────┐
        │ Cognitive Games    │
        │ Memory Assistance  │
        └─────────┬──────────┘
                  ↓
        ┌────────────────────┐
        │ AI Personalization │
        │ Engine             │
        └─────────┬──────────┘
                  ↓
        ┌────────────────────┐
        │ User Performance   │
        │ & Activity Data    │
        └─────────┬──────────┘
                  ↓
        ┌────────────────────┐
        │ Caregiver Dashboard│
        └────────────────────┘


##AI Personalization Flow

User plays game
       ↓
Performance collected
       ↓
Accuracy + Time + Attempts
       ↓
AI analyses performance
       ↓
Difficulty adjusted
       ↓
Personalized game recommended
       ↓
New performance recorded
       ↓
Continuous personalization

## Setup & Run Locally
1. `npm install`
2. `npm run dev`

## Deployment (Vercel / Netlify)
1. Push this repository to GitHub.
2. Import the project in Vercel or Netlify.
3. Build command: `npm run build`
4. Output directory: `dist`
