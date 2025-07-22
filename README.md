# Match-Making App

This is a MERN stack project for matching clients with creative talent. It helps clients (like brands or individuals) find the best creators for their projects based on requirements like location, budget, style, and skills.

## Features
- Submit a creative brief (project details)
- Get top recommended talents with scores and rationale
- Clean, modern UI with a purple/black theme
- Admin endpoints for managing talents, gigs, and customers

## Tech Stack
- **Frontend:** React (with React Router)
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Getting Started

### 1. Clone the repository
```
git clone https://github.com/yourusername/your-repo.git
cd match-making-app
```

### 2. Set up the backend
```
cd backend
cp .env.example .env
# Edit .env to set your MongoDB URI if needed
npm install
node index.js
```

### 3. Set up the frontend
```
cd ../frontend
cp .env.example .env
# Edit .env if deploying or using a different API URL
npm install
npm start
```

- The frontend will run on [http://localhost:3000](http://localhost:3000)
- The backend will run on [http://localhost:5005](http://localhost:5005)

## Deployment
- Deploy the backend to Render, Railway, or your preferred Node host.
- Deploy the frontend to Vercel, Netlify, or similar.
- Set environment variables in your deployment dashboard as needed.

## Notes
- Do **not** commit your `.env` files. Use `.env.example` for sharing config.
- For any issues, open an issue or pull request.

---

**Made with care for real-world creative matchmaking.** 