import React, { useState, useEffect } from 'react';
import SentimentGauge from './SentimentGauge';
import TradingChart from './TradingChart';

export default function Dashboard() {
  const [sentiment, setSentiment] = useState(57.8);
  useEffect(() => {
    const interval = setInterval(() => {
      setSentiment(prev => Math.max(40, Math.min(70, prev + (Math.random() - 0.5) * 2)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4">
      <header className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <SentimentGauge value={sentiment} />
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8"><TradingChart /></div>
      </main>
    </div>
  );
}