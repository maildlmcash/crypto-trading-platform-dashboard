export default function SentimentGauge({ value }: { value: number }) {
  const color = value > 55 ? '#10b981' : '#ef4444';
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center">
      <h3 className="text-sm text-slate-400 mb-2">AGGREGATED CEX SENTIMENT</h3>
      <div className="text-4xl font-bold" style={{ color }}>{value.toFixed(1)}%</div>
      <p className="text-xs mt-2">BUY</p>
    </div>
  );
}