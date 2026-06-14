import { riskColor, statusColor } from '../../utils/ai'
export function StatusBadge({status}) { return <span className={`badge ${statusColor(status)}`}>{status}</span> }
export function RiskBadge({risk}) { return <span className={`badge ${riskColor(risk)}`}>{risk}</span> }
