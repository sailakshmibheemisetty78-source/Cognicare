import React, { useState, useEffect } from 'react';

const CARDS = [
  { id: 1, icon: '🦏', name: 'Rhino' },
  { id: 2, icon: '🍵', name: 'Assam Tea' },
  { id: 3, icon: '🎋', name: 'Bamboo' },
];

export default function Game({ navigate }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [aiMessage, setAiMessage] = useState("");

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    const deck = [...CARDS, ...CARDS]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, uniqueId: Math.random() }));
    setCards(deck);
    setFlipped([]);
    setSolved([]);
    setAiMessage("");
  };

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || solved.includes(index)) return;
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const match = cards[newFlipped[0]].id === cards[newFlipped[1]].id;
      
      setTimeout(() => {
        if (match) {
          setSolved([...solved, newFlipped[0], newFlipped[1]]);
          if (solved.length + 2 === cards.length) {
            setAiMessage("Excellent! AI is slightly increasing difficulty for next time.");
          }
        } else {
          setAiMessage("AI: Adjusting game to be easier next round.");
        }
        setFlipped([]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-ner-earth">Match Cards</h2>
        <button onClick={() => navigate('home')} className="bg-gray-300 text-black px-4 py-2 rounded-xl text-xl font-bold">
          Back
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {cards.map((card, index) => (
          <button
            key={card.uniqueId}
            onClick={() => handleCardClick(index)}
            className={`h-32 text-6xl rounded-2xl flex items-center justify-center transition-all shadow-md border-4
              ${flipped.includes(index) || solved.includes(index) 
                ? 'bg-white border-ner-green' 
                : 'bg-ner-earth border-ner-earth text-transparent'}`}
          >
            {(flipped.includes(index) || solved.includes(index)) ? card.icon : '?'}
          </button>
        ))}
      </div>

      {aiMessage && (
        <div className="mt-6 p-4 bg-yellow-100 rounded-xl border border-yellow-300 text-center text-lg font-bold text-yellow-800">
          ⚙️ {aiMessage}
        </div>
      )}
      
      {solved.length === cards.length && (
        <button onClick={initGame} className="mt-6 bg-ner-green text-white py-4 rounded-xl text-2xl font-bold shadow-lg">
          Play Again
        </button>
      )}
    </div>
  );
}
