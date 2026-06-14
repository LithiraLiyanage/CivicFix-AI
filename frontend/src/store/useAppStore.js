import { create } from 'zustand'
import toast from 'react-hot-toast'
import { reports as demoReports, users as demoUsers, departments as demoDepartments } from '../data/demoData'
import { classifyIssue, findDuplicates } from '../utils/ai'

const storedUser = JSON.parse(localStorage.getItem('civicfix_user') || 'null')
const storedReports = JSON.parse(localStorage.getItem('civicfix_reports') || 'null')

export const useAppStore = create((set, get) => ({
  user: storedUser,
  users: demoUsers,
  reports: storedReports || demoReports,
  departments: demoDepartments,
  notifications: ['Drainage report verified by admin','Road damage report assigned to department'],
  login: (email, password) => {
    const user = demoUsers.find(u => u.email === email && u.password === password)
    if (!user) { toast.error('Invalid demo credentials'); return false }
    localStorage.setItem('civicfix_user', JSON.stringify(user)); set({user}); toast.success(`Welcome ${user.name}`); return true
  },
  register: (payload) => {
    const user = { id: crypto.randomUUID(), role:'citizen', trustScore:70, ...payload }
    set(s => ({ users:[...s.users,user], user })); localStorage.setItem('civicfix_user', JSON.stringify(user)); toast.success('Account created successfully'); return true
  },
  logout: () => { localStorage.removeItem('civicfix_user'); set({user:null}); toast.success('Logged out') },
  createReport: (payload) => {
    const ai = classifyIssue(payload.title, payload.description, payload.urgency, payload.images?.length || 0, 0)
    const candidate = { ...payload, category: payload.category || ai.category, location: payload.location }
    const duplicates = findDuplicates(candidate, get().reports)
    const withDupAI = classifyIssue(payload.title, payload.description, payload.urgency, payload.images?.length || 0, duplicates.length)
    const report = { id: crypto.randomUUID(), status:'Submitted', createdAt:new Date().toISOString().slice(0,10), submittedBy:get().user?.id || 'guest', supporters:0, aiClassification:withDupAI, category:payload.category || withDupAI.category, priorityScore:withDupAI.priorityScore, riskLevel:withDupAI.riskLevel, timeline:['Report submitted','AI classified issue'], ...payload }
    const next=[report, ...get().reports]
    localStorage.setItem('civicfix_reports', JSON.stringify(next)); set({reports:next}); toast.success('Issue submitted and AI classified'); return report
  },
  updateReport: (id, patch) => set(s => {
    const reports=s.reports.map(r => r.id===id ? {...r, ...patch, timeline:[...(r.timeline||[]), patch.timelineNote || `Status updated to ${patch.status||r.status}`]} : r)
    localStorage.setItem('civicfix_reports', JSON.stringify(reports)); toast.success('Report updated'); return {reports}
  }),
  supportReport: (id) => set(s => { const reports=s.reports.map(r => r.id===id ? {...r, supporters:(r.supporters||0)+1} : r); localStorage.setItem('civicfix_reports', JSON.stringify(reports)); toast.success('Community support added'); return {reports} })
}))
