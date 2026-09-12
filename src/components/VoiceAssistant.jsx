import React, { useState } from 'react';

export default function VoiceAssistant({ navigate }) {
  const [isListening, setIsListening] = useState(false);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceCommand = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Voice not supported in this browser for the demo.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.onstart = () => {
      setIsListening(true);
      speak("I am listening. How can I help you?");
    };

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      
      if (command.includes('game') || command.includes('play')) {
        speak("Opening the memory game.");
        navigate('game');
      } else if (command.includes('remind') || command.includes('medicine')) {
        speak("Opening your daily reminders.");
        navigate('reminders');
      } else if (command.includes('home')) {
        speak("Going back to the home screen.");
        navigate('home');
      } else if (command.includes('family') || command.includes('dashboard')) {
        speak("Opening the family area.");
        navigate('dashboard');
      } else {
        speak("I did not understand. Try saying 'play a game' or 'remind me'.");
      }
    };

    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  return (
    <div className="absolute bottom-4 left-0 w-full flex justify-center px-4">
      <button 
        onClick={handleVoiceCommand}
        className={`w-full py-6 rounded-3xl text-2xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg
          ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-ner-accent text-white hover:bg-orange-600'}`}
      >
        <span className="text-4xl">🎙️</span> 
        {isListening ? 'Listening...' : 'Tap to Speak'}
      </button>
    </div>
  );
}
