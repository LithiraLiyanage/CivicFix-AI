<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:050505,40:DC2626,100:FACC15&height=190&section=header&text=CivicFix%20AI&fontSize=58&fontColor=F8FAFC&animation=fadeIn&fontAlignY=36&desc=Report%20Problems.%20Track%20Progress.%20Build%20Better%20Cities.&descAlignY=58&descSize=18" width="100%" />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=800&size=25&duration=2500&pause=700&color=FACC15&center=true&vCenter=true&width=1100&lines=AI-Powered+Smart+City+Issue+Reporting;React+%7C+Node.js+%7C+MongoDB+%7C+Maps+%7C+Analytics;Black+%2B+Red+%2B+Yellow+Premium+SaaS+UI;Role-Based+Citizen+%2F+Admin+%2F+Department+Dashboards" alt="Typing SVG" />

<br />

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Ready-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-Premium_UI-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-A%2B_Portfolio_Project-FACC15?style=for-the-badge)

</div>

---

## 🚨 What is CivicFix AI?

**CivicFix AI** is a production-style smart civic issue reporting and resolution platform built for real Sri Lankan public infrastructure problems.

Citizens can report issues such as damaged roads, broken street lights, garbage collection problems, drainage blocks, flood risks, water leaks and unsafe public areas. The system uses AI-style classification, priority scoring, duplicate detection, map-based reporting, role-based dashboards and authority workflow tracking.

> **Tagline:** `Report Problems. Track Progress. Build Better Cities.`

---

## 🌟 Why this project is unique

| Normal complaint app | CivicFix AI |
|---|---|
| Basic form submission | AI classification + confidence score |
| No workflow | Citizen → Admin → Department Officer workflow |
| No priority logic | Civic risk meter + SLA timer |
| No transparency | Public analytics dashboard |
| No map intelligence | Live civic issue map with risk markers |
| No duplicate logic | Nearby duplicate report detection |
| Basic UI | Premium black + red + yellow SaaS interface |

---

## ✨ Core Features

### 👤 Citizen Module
- 📝 Submit civic issue reports
- 📍 Add location coordinates
- 🖼️ Upload evidence images
- 🤖 View AI category suggestion
- ⚠️ See priority score and risk level
- 🔁 Detect similar duplicate reports
- 📊 Track report status and timeline
- 👍 Support existing community reports

### 🛡️ Admin Module
- 📌 View all civic reports
- 🔍 Search and filter reports
- ✅ Verify or reject reports
- 🏢 Assign departments
- 🗺️ Monitor issue map
- 📊 View analytics dashboard
- 👥 Manage users
- 🏛️ Manage departments

### 🏢 Department Officer Module
- 📋 View assigned reports
- 🔄 Update progress status
- ✅ Mark reports as resolved
- ⏱️ Monitor SLA windows
- 📈 Track performance metrics

### 🌍 Public Transparency
- 🗺️ Live public civic map
- 📊 Public analytics dashboard
- ✅ Resolved vs active issues
- 🔥 Critical risk visibility
- 📈 Resolution trend charts

---

## 🧠 AI-Style Logic

CivicFix AI includes a rule-based AI classification engine that analyzes title, description, urgency, image evidence and duplicate count.

```js
Input: "Drain is blocked and water overflows when raining"
Output: {
  category: "Drainage Block",
  suggestedDepartment: "Drainage & Flood Control",
  priorityScore: 89,
  riskLevel: "Critical",
  confidence: 97
}
```

### Priority score levels

| Score | Risk |
|---:|---|
| 0–30 | Low |
| 31–60 | Medium |
| 61–80 | High |
| 81–100 | Critical |

---

## 🎨 Premium UI Theme

| Token | Color |
|---|---|
| Deep Black | `#050505` |
| Charcoal Black | `#111111` |
| Danger Red | `#DC2626` |
| Premium Red | `#EF4444` |
| Warning Yellow | `#FACC15` |
| Amber Yellow | `#F59E0B` |
| Soft White | `#F8FAFC` |
| Gray Text | `#94A3B8` |

UI includes:

- 🖤 Dark SaaS layout
- 🔴 Red/yellow glowing accents
- 🪟 Glassmorphism cards
- ✨ Framer Motion animations
- 📱 Fully responsive layout
- 📊 Recharts dashboards
- 🗺️ React Leaflet maps
- 🔔 Toast notifications
- 🧭 Role-based sidebars

---

## 🧰 Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- React Router DOM
- React Hook Form
- Zod Validation
- Zustand
- Framer Motion
- Recharts
- React Leaflet
- Lucide Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- Helmet
- CORS
- Express Rate Limit
- Morgan Logger
- Centralized Error Handler

---

## 🔐 Demo Credentials

| Role | Email | Password |
|---|---|---|
| Citizen | `citizen@civicfix.lk` | `Citizen@123` |
| Admin | `admin@civicfix.lk` | `Admin@123` |
| Department Officer | `officer@civicfix.lk` | `Officer@123` |

---

## 📁 Folder Structure

```bash
CivicFix-AI/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── charts/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── map/
│   │   │   └── tables/
│   │   ├── data/
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── citizen/
│   │   │   ├── dashboards/
│   │   │   ├── public/
│   │   │   └── reports/
│   │   ├── store/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Run Locally

### 1. Clone project

```bash
git clone https://github.com/your-username/CivicFix-AI.git
cd CivicFix-AI
```

### 2. Install dependencies

```bash
npm run install:all
```

### 3. Setup backend environment

Create `server/.env` from `server/.env.example`.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/civicfix_ai
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:5173
```

### 4. Seed demo data

```bash
npm run seed
```

### 5. Run full project

```bash
npm run dev
```

Frontend:

```bash
http://localhost:5173
```

Backend:

```bash
http://localhost:5000
```

---

## 🧪 Frontend Demo Mode

The React app includes local demo data using Zustand and localStorage. This means you can explore the UI even before connecting MongoDB.

---

## 📡 API Endpoints

### Auth

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

### Reports

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/reports` | Create report |
| GET | `/api/reports` | Get reports |
| GET | `/api/reports/:id` | Get single report |
| PATCH | `/api/reports/:id/status` | Update status |
| PATCH | `/api/reports/:id/assign` | Assign department |
| POST | `/api/reports/:id/comments` | Add comment |
| POST | `/api/reports/:id/support` | Support report |
| DELETE | `/api/reports/:id` | Delete report |

### AI

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/ai/classify` | AI-style issue classification |
| POST | `/api/ai/priority-score` | Priority score generation |

### Analytics

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/analytics/overview` | Overview analytics |
| GET | `/api/analytics/public` | Public analytics |

---

## 🛡️ Security Features

- 🔐 JWT authentication
- 🧂 bcrypt password hashing
- 🧱 Helmet security headers
- 🚦 API rate limiting
- 🔒 Role-based authorization
- ✅ Request validation ready
- 🧼 Password excluded from responses
- 🧯 Centralized error handling

---

## 🔮 Future Improvements

- 🤖 Connect OpenAI / Gemini for advanced classification
- 🛰️ Add geospatial heatmap clustering
- 📱 Build mobile app version with React Native
- 📩 SMS notifications for citizens
- 🧾 PDF report export
- 🏛️ Real municipal council integration
- 📷 Computer vision for issue severity detection

---

## 👨‍💻 Author

**Lithira Liyanage**

- GitHub: `github.com/LithiraLiyanage`
- Portfolio: `lithira-liyanage.vercel.app`
- LinkedIn: `linkedin.com/in/lithira-liyanage-667b99403`

---

<div align="center">

### ⭐ If this project helps your portfolio, give it a star!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FACC15,40:DC2626,100:050505&height=130&section=footer" width="100%" />

</div>
