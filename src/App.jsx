import React, { useState } from 'react';
import Home from './pages/Home';
import Game from './pages/Game';
import Reminders from './pages/Reminders';
import Dashboard from './pages/Dashboard';
import VoiceAssistant from './components/VoiceAssistant';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <div className="min-h-screen max-w-md mx-auto bg-ner-soft border-x-4 border-ner-earth/10 relative shadow-2xl overflow-hidden flex flex-col">
      {/* Top Bar Status */}
      <div className="bg-ner-earth text-white p-4 text-center font-bold text-xl flex justify-between items-center shadow-md">
        <span>NeuroNortheast</span>
        <span className="text-sm bg-black/20 px-3 py-1 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400"></div> Offline Mode
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-24 p-4">
        {currentScreen === 'home' && <Home navigate={setCurrentScreen} />}
        {currentScreen === 'game' && <Game navigate={setCurrentScreen} />}
        {currentScreen === 'reminders' && <Reminders navigate={setCurrentScreen} />}
        {currentScreen === 'dashboard' && <Dashboard navigate={setCurrentScreen} />}
      </div>

      {/* Persistent Voice Assistant */}
      <VoiceAssistant navigate={setCurrentScreen} />
    </div>
  );
}

export default App;
