🚀 TaskFlow – Full Stack Task Manager

A modern full-stack task management application built with:

⚡ Next.js (App Router) + TypeScript

🎨 TailwindCSS + Framer Motion (premium UI)

🔐 JWT Authentication (Access + Refresh tokens)

🗄️ Node.js + Express + Prisma

🐘 PostgreSQL (Neon)

☁️ Deployed on Vercel (Frontend) & Render (Backend)

🌐 Live Demo

Frontend:
👉 https://task-manager-bice-iota.vercel.app

Backend API:
👉 https://task-manager-sz18.onrender.com

✨ Features
🔐 Authentication

Register / Login

Access + Refresh JWT tokens

HTTP-Only cookies

Auto token refresh via Axios interceptor

📋 Task Management

Create tasks

Edit tasks

Delete tasks

Drag & Drop reordering

Pagination

Protected routes

🎨 Premium UI

Glassmorphism cards

Floating gradient background

Smooth animations (Framer Motion)

3D tilt cards

Particles background

Light/Dark theme toggle

Responsive grid layout

Toast notifications

📊 Dashboard

Task analytics charts

Status breakdown

Modern card layout

🏗️ Project Structure
task-manager/
│
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── context/
│   ├── lib/
│   ├── styles/
│   └── package.json
│
└── README.md

🛠️ Backend Setup (Local)
1️⃣ Install dependencies
cd backend
npm install

2️⃣ Setup environment variables

Create .env:

DATABASE_URL=your_postgres_url
JWT_ACCESS_SECRET=your_secret
JWT_REFRESH_SECRET=your_secret
FRONTEND_URL=http://localhost:3000

3️⃣ Run Prisma
npx prisma generate
npx prisma migrate dev

4️⃣ Start server
npm run dev


Server runs on:

http://localhost:5000

💻 Frontend Setup (Local)
1️⃣ Install dependencies
cd frontend
npm install

2️⃣ Add environment variable

Create .env.local:

NEXT_PUBLIC_API_URL=http://localhost:5000

3️⃣ Run frontend
npm run dev


App runs on:

http://localhost:3000

🚀 Deployment
Backend (Render)

Build Command:

npm install && npx prisma generate && npx prisma migrate deploy && npm run build


Start Command:

npm start


Environment Variables:

DATABASE_URL

JWT_ACCESS_SECRET

JWT_REFRESH_SECRET

FRONTEND_URL

Frontend (Vercel)

Environment Variable:

NEXT_PUBLIC_API_URL=https://your-render-backend-url

🔐 Authentication Flow

User logs in

Backend returns:

Access token

Refresh token (cookie)

Axios interceptor:

Automatically refreshes expired tokens

Protected routes use JWT middleware

🧠 Tech Stack
Frontend

Next.js 14

TypeScript

TailwindCSS

Framer Motion

Axios

React Hot Toast

Backend

Node.js

Express

Prisma ORM

PostgreSQL (Neon)

JWT

Cookie Parser

CORS
