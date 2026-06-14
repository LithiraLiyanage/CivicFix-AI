import { useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
const color={Critical:'#EF4444',High:'#F59E0B',Medium:'#FACC15',Low:'#22C55E'}
function icon(risk){ return L.divIcon({ className:'', html:`<div style="width:22px;height:22px;border-radius:999px;background:${color[risk]||'#94A3B8'};border:3px solid #111;box-shadow:0 0 22px ${color[risk]||'#94A3B8'}"></div>`, iconSize:[22,22], iconAnchor:[11,11] }) }
export default function IssueMap({reports=[]}){
  const center=useMemo(()=>reports[0]?.location ? [reports[0].location.lat,reports[0].location.lng] : [6.9271,79.8612],[reports])
  return <div className="overflow-hidden rounded-3xl border border-white/10"><MapContainer center={center} zoom={9} scrollWheelZoom className="z-0"><TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />{reports.map(r=><Marker key={r.id} position={[r.location.lat,r.location.lng]} icon={icon(r.riskLevel)}><Popup><b>{r.title}</b><br/>{r.category}<br/>{r.status} • {r.riskLevel}</Popup></Marker>)}</MapContainer></div>
}
