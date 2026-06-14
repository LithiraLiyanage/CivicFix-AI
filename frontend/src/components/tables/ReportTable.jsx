import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Search } from 'lucide-react'
import { RiskBadge, StatusBadge } from '../common/Badge'
export default function ReportTable({ reports=[], title='Reports' }) {
  const [q,setQ]=useState(''); const [status,setStatus]=useState('All')
  const filtered=reports.filter(r => [r.title,r.category,r.district,r.city].join(' ').toLowerCase().includes(q.toLowerCase()) && (status==='All'||r.status===status))
  return <div className="card">
    <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><h3 className="text-xl font-black">{title}</h3><div className="flex gap-3"><label className="relative flex-1"><Search className="absolute left-3 top-3 h-4 w-4 text-muted"/><input className="input pl-10" placeholder="Search reports..." value={q} onChange={e=>setQ(e.target.value)}/></label><select className="input max-w-44" value={status} onChange={e=>setStatus(e.target.value)}>{['All','Submitted','Verified','Assigned','In Progress','Resolved','Closed','Rejected'].map(s=><option key={s}>{s}</option>)}</select></div></div>
    <div className="overflow-x-auto"><table className="w-full min-w-[780px] text-left text-sm"><thead className="text-xs uppercase text-muted"><tr className="border-b border-white/10"><th className="py-3">Issue</th><th>Category</th><th>District</th><th>Priority</th><th>Status</th><th>Support</th><th></th></tr></thead><tbody>{filtered.map(r=><tr key={r.id} className="border-b border-white/5 transition hover:bg-white/[0.03]"><td className="py-4"><div className="font-bold text-pearl">{r.title}</div><div className="text-xs text-muted">{r.address}</div></td><td>{r.category}</td><td>{r.district}</td><td><RiskBadge risk={r.riskLevel}/></td><td><StatusBadge status={r.status}/></td><td>{r.supporters}</td><td><Link className="btn-ghost !px-3 !py-2" to={`/reports/${r.id}`}><Eye className="h-4 w-4"/></Link></td></tr>)}</tbody></table></div>
    {!filtered.length && <div className="grid place-items-center py-14 text-center text-muted">No reports found. Try changing filters.</div>}
  </div>
}
