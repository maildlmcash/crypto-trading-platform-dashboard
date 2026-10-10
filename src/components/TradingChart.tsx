import { useEffect, useRef } from 'react';
import { createChart, CandlestickSeries, ColorType } from 'lightweight-charts';

export const TradingChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!chartContainerRef.current) return;
    const chart = createChart(chartContainerRef.current, {
      layout: { background: { type: ColorType.Solid, color: '#0f172a' }, textColor: '#e2e8f0' },
      width: chartContainerRef.current.clientWidth,
      height: 500,
    });
    const series = chart.addSeries(CandlestickSeries, { upColor: '#22c55e', downColor: '#ef4444' });
    series.setData([{ time: '2026-10-01', open: 60000, high: 62000, low: 59000, close: 61000 }]);
    chart.timeScale().fitContent();
    return () => chart.remove();
  }, []);
  return <div ref={chartContainerRef} className="w-full h-[500px] rounded-xl" />;
};