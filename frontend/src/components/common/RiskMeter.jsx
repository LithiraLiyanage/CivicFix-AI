export default function RiskMeter({ score=0, label='Civic Risk Meter' }) {
  const deg = Math.min(100, Math.max(0, score)) * 3.6
  return <div className="card">
    <div className="flex items-center justify-between"><h3 className="font-black">{label}</h3><span className="badge border-red-500/30 bg-red-500/10 text-red-300">AI Score</span></div>
    <div className="mx-auto mt-6 grid h-40 w-40 place-items-center rounded-full" style={{background:`conic-gradient(#EF4444 ${deg}deg, rgba(255,255,255,.08) 0deg)`}}>
      <div className="grid h-32 w-32 place-items-center rounded-full bg-coal"><div className="text-center"><div className="text-4xl font-black">{score}</div><div className="text-xs text-muted">/100</div></div></div>
    </div>
    <p className="mt-5 text-center text-sm text-muted">Higher score means faster SLA, stronger risk and more urgent authority response.</p>
  </div>
}
