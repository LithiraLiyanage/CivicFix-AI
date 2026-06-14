import { motion } from 'framer-motion'
export default function StatCard({ icon:Icon, label, value, hint, tone='red' }) {
  const toneClass = tone === 'yellow' ? 'from-yellow-400/20 to-orange-500/5 text-yellow-300' : tone === 'green' ? 'from-green-400/20 to-emerald-500/5 text-green-300' : 'from-red-500/20 to-yellow-400/5 text-red-300'
  return <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="card shimmer">
    <div className="flex items-start justify-between gap-4">
      <div><p className="text-sm text-muted">{label}</p><h3 className="mt-2 text-3xl font-black">{value}</h3><p className="mt-2 text-xs text-muted">{hint}</p></div>
      <div className={`rounded-2xl bg-gradient-to-br ${toneClass} p-3`}>{Icon && <Icon className="h-6 w-6" />}</div>
    </div>
  </motion.div>
}
