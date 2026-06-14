export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505', coal: '#111111', ember: '#DC2626', flare: '#EF4444', caution: '#FACC15', amber: '#F59E0B', pearl: '#F8FAFC', muted: '#94A3B8'
      },
      boxShadow: { glow: '0 0 40px rgba(239,68,68,.25)', yellowGlow: '0 0 35px rgba(250,204,21,.18)' },
      backgroundImage: {
        'radial-danger': 'radial-gradient(circle at top left, rgba(239,68,68,.32), transparent 32%), radial-gradient(circle at bottom right, rgba(250,204,21,.18), transparent 30%)'
      }
    }
  },
  plugins: []
}
