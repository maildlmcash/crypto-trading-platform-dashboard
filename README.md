# Crypto Trading Platform Dashboard

Complete A-to-Z futuristic crypto prediction and automated trading platform dashboard.

Built with React + TypeScript + Tailwind CSS + Lightweight Charts.

Based on the fixed & enhanced Master Blueprint (Phases 1-5).

## Features
- Dark cyber/glassmorphism theme
- Live sentiment gauges, whale direction, AI confidence
- Interactive Lightweight Charts with AI/whale markers
- Top 15 CEX live feed
- Bot controls and Admin panel
- Ready for backend WebSocket integration (Redis from Phases 2-4)

## Setup
```bash
npm create vite@latest . -- --template react-ts
npm install lightweight-charts framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

## Backend
Connect to FastAPI backend from Phase 1-5 Docker Compose for real data.