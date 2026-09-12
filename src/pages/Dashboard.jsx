import React from 'react';

export default function Dashboard({ navigate }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Family Dashboard</h2>
        <button onClick={() => navigate('home')} className="bg-gray-300 text-black px-4 py-2 rounded-xl text-lg font-bold">
          Close
        </button>
      </div>

      {/* Mock Chart Area */}
      <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 border border-gray-200">
        <h3 className="font-bold text-gray-700 mb-4">Weekly Cognitive Score Trend</h3>
        <div className="flex items-end gap-3 h-32 border-b border-gray-300 pb-2">
          <div className="w-1/5 bg-ner-earth h-[50%] rounded-t-md relative group"><span className="absolute -top-6 left-1 text-xs font-bold text-gray-500">50</span></div>
          <div className="w-1/5 bg-ner-earth h-[60%] rounded-t-md relative group"><span className="absolute -top-6 left-1 text-xs font-bold text-gray-500">60</span></div>
          <div className="w-1/5 bg-ner-earth h-[65%] rounded-t-md relative group"><span className="absolute -top-6 left-1 text-xs font-bold text-gray-500">65</span></div>
          <div className="w-1/5 bg-ner-green h-[85%] rounded-t-md relative group"><span className="absolute -top-6 left-1 text-xs font-bold text-green-700">85</span></div>
          <div className="w-1/5 bg-ner-earth h-[70%] rounded-t-md relative group"><span className="absolute -top-6 left-1 text-xs font-bold text-gray-500">70</span></div>
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2 px-2 font-medium">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mb-4">
        <div className="font-bold text-red-700">No connectivity for 6 hours</div>
        <div className="text-sm text-red-600">App is running in offline mode. Data will sync automatically when online.</div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-700 mb-2">Recent Activity</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex justify-between"><span>✅ Took BP Pill</span> <span className="text-gray-400">9:00 AM</span></li>
          <li className="flex justify-between"><span>🧩 Played Match Game</span> <span className="text-gray-400">Yesterday</span></li>
        </ul>
      </div>
    </div>
  );
}
