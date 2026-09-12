import React from 'react';

export default function Home({ navigate }) {
  return (
    <div className="flex flex-col gap-6 h-full justify-center mt-8">
      <button 
        onClick={() => navigate('game')}
        className="bg-ner-green text-white p-8 rounded-3xl shadow-xl hover:scale-[1.02] active:scale-95 transition-transform text-left relative overflow-hidden"
      >
        <div className="text-5xl mb-4">🧩</div>
        <div className="text-3xl font-bold">Play a Game</div>
      </button>

      <button 
        onClick={() => navigate('reminders')}
        className="bg-[#2E5B88] text-white p-8 rounded-3xl shadow-xl hover:scale-[1.02] active:scale-95 transition-transform text-left relative overflow-hidden"
      >
        <div className="text-5xl mb-4">⏰</div>
        <div className="text-3xl font-bold">My Reminders</div>
      </button>

      <button 
        onClick={() => navigate('dashboard')}
        className="bg-gray-200 text-gray-800 p-6 rounded-3xl shadow-md hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-between mt-4"
      >
        <span className="text-2xl font-bold">Family Dashboard</span>
        <span className="text-3xl">👨‍👩‍👧</span>
      </button>
    </div>
  );
}
