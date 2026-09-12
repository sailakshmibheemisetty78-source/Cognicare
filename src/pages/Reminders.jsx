import React, { useState, useEffect } from 'react';

export default function Reminders({ navigate }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance("It is time to take your Blood Pressure pill after breakfast.");
    window.speechSynthesis.speak(utterance);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#2E5B88]">Routine</h2>
        <button onClick={() => navigate('home')} className="bg-gray-300 text-black px-4 py-2 rounded-xl text-xl font-bold">
          Back
        </button>
      </div>

      <div className={`p-8 rounded-3xl text-center shadow-xl transition-all transform ${completed ? 'bg-green-500 scale-105' : 'bg-white border-4 border-[#2E5B88]'}`}>
        <div className="text-7xl mb-6">{completed ? '🎉' : '💊'}</div>
        <div className={`text-4xl font-bold mb-4 ${completed ? 'text-white' : 'text-gray-800'}`}>
          {completed ? 'Great Job!' : 'Blood Pressure Pill'}
        </div>
        <div className={`text-2xl ${completed ? 'text-green-100' : 'text-gray-500'}`}>
          {completed ? 'Recorded for today.' : 'After breakfast'}
        </div>
      </div>

      {!completed && (
        <button 
          onClick={() => {
            setCompleted(true);
            window.speechSynthesis.speak(new SpeechSynthesisUtterance("Great job. I have recorded this for your family."));
          }}
          className="mt-12 bg-green-600 text-white py-8 rounded-3xl text-3xl font-bold shadow-2xl active:scale-95 transition-transform"
        >
          ✅ Yes, I Took It
        </button>
      )}
    </div>
  );
}
