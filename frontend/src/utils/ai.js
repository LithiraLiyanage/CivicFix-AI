export const categoryRules = [
  { category:'Road Damage', department:'Road Development Unit', severity:34, keywords:['road','pothole','broken road','crack','accident','vehicle damage','පාර'] },
  { category:'Street Light', department:'Municipal Lighting Unit', severity:25, keywords:['light','lamp','dark road','streetlight','night','electricity'] },
  { category:'Garbage Issue', department:'Waste Management Authority', severity:22, keywords:['garbage','waste','smell','collection','dump','trash'] },
  { category:'Drainage Block', department:'Drainage & Flood Control', severity:32, keywords:['drain','blocked','water stuck','canal','drainage','overflow'] },
  { category:'Flood Risk', department:'Drainage & Flood Control', severity:38, keywords:['flood','rain','water level','overflow','heavy rain'] },
  { category:'Water Leak', department:'Water Supply Maintenance', severity:28, keywords:['leak','pipe','water line','broken pipe','water wasting'] },
  { category:'Unsafe Area', department:'Public Safety Response', severity:36, keywords:['unsafe','danger','crime','dark area','harassment','accident risk'] },
  { category:'Fallen Tree', department:'Emergency Maintenance Unit', severity:26, keywords:['tree','fallen','blocked road','branch'] },
  { category:'Public Property Damage', department:'Municipal Maintenance Unit', severity:24, keywords:['property','bench','sign board','bus stop','damage'] }
]
const urgencyScore = { Low: 6, Medium: 16, High: 28, Critical: 40 }
export function classifyIssue(title='', description='', urgency='Medium', imageCount=0, duplicateCount=0) {
  const text = `${title} ${description}`.toLowerCase()
  let best = { category:'Other', department:'Municipal Help Desk', severity:15, hits:0, keywords:[] }
  for (const rule of categoryRules) {
    const hits = rule.keywords.filter(k => text.includes(k.toLowerCase())).length
    if (hits > best.hits) best = { ...rule, hits }
  }
  const confidence = Math.min(98, Math.max(52, 58 + best.hits * 12 + (description.length > 80 ? 8 : 0)))
  const score = Math.min(100, Math.round(best.severity + (urgencyScore[urgency]||16) + Math.min(10, imageCount*3) + Math.min(10, duplicateCount*2) + (best.hits>1?6:0)))
  const riskLevel = score > 80 ? 'Critical' : score > 60 ? 'High' : score > 30 ? 'Medium' : 'Low'
  return { suggestedCategory: best.category, category: best.category, confidence, suggestedDepartment: best.department, priorityScore: score, riskLevel, explanation: best.hits ? `Detected ${best.hits} civic-risk keyword group(s) and matched this report to ${best.department}.` : 'No strong category keywords detected. Routing to municipal help desk for manual review.' }
}
export function findDuplicates(candidate, reports=[]) {
  const km = (a,b) => {
    if (!a || !b) return 999
    const R=6371, dLat=(b.lat-a.lat)*Math.PI/180, dLng=(b.lng-a.lng)*Math.PI/180
    const s=Math.sin(dLat/2)**2 + Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLng/2)**2
    return 2*R*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))
  }
  return reports.filter(r => r.category === candidate.category && !['Resolved','Closed','Rejected'].includes(r.status) && km(candidate.location, r.location) < 0.7)
}
export const slaHours = { Critical:24, High:72, Medium:168, Low:336 }
export function statusColor(status) { return {Submitted:'border-yellow-400/30 text-yellow-300 bg-yellow-400/10',Verified:'border-blue-400/30 text-blue-300 bg-blue-400/10',Assigned:'border-orange-400/30 text-orange-300 bg-orange-400/10','In Progress':'border-purple-400/30 text-purple-300 bg-purple-400/10',Resolved:'border-green-400/30 text-green-300 bg-green-400/10',Closed:'border-gray-400/30 text-gray-300 bg-gray-400/10',Rejected:'border-red-400/30 text-red-300 bg-red-400/10'}[status] || 'border-white/10 text-muted bg-white/5' }
export function riskColor(risk) { return {Critical:'border-red-500/40 text-red-300 bg-red-500/10',High:'border-orange-400/40 text-orange-300 bg-orange-400/10',Medium:'border-yellow-400/40 text-yellow-300 bg-yellow-400/10',Low:'border-green-400/40 text-green-300 bg-green-400/10'}[risk] }
