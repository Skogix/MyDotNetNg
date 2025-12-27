# Task Manager

A modern, full-stack web application for managing tasks and to-do lists. Now with **Cloudflare Pages** deployment for global, serverless hosting!

## 🚀 Deploy to Cloudflare Pages (Recommended)

This app is ready for instant deployment on Cloudflare's edge network:

- **Zero Config**: Push to deploy with GitHub Actions
- **Serverless**: API runs on Cloudflare Functions
- **Global CDN**: Fast loading worldwide
- **Free Tier**: No cost for most apps

👉 **[Quick Start Guide](./QUICKSTART.md)** | **[Full Deployment Guide](./CLOUDFLARE_DEPLOYMENT.md)**

---

## Features

- ✅ Create, read, update, and delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Clean and modern UI design
- ✅ Dark mode / Light mode toggle
- ✅ Responsive design
- ✅ Real-time updates
- ✅ RESTful API

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite 4** - Lightning-fast build tool
- **Tailwind CSS 3** - Modern styling framework
- **Axios** - HTTP client

### Backend (Cloudflare Deployment)
- **Cloudflare Functions** - Serverless API endpoints
- **Cloudflare D1** - SQLite database at the edge
- **Cloudflare Pages** - Static site hosting

### Backend (Legacy/Local Development)
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM

## Project Structure

```
├── src/                    # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/
│   │   └── _headers        # Cloudflare Pages headers
│   └── package.json
├── functions/              # Cloudflare serverless functions
│   └── api/
│       ├── tasks/
│       │   ├── index.js    # GET/POST /api/tasks
│       │   └── [id].js     # GET/PUT/DELETE /api/tasks/:id
│       └── health.js       # Health check endpoint
├── migrations/             # Database schema
│   └── 0001_create_tasks_table.sql
├── server/                 # Legacy Node.js API (for local dev)
│   ├── index.js            # Express server
│   └── package.json
├── .github/workflows/      # CI/CD automation
│   └── deploy.yml          # Auto-deploy to Cloudflare
├── wrangler.toml           # Cloudflare configuration
└── docs/                   # Documentation
    ├── API.md              # API documentation
    └── USER_GUIDE.md       # User guide
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../src
   npm install
   ```

4. Set up environment variables:
   ```bash
   cd ../server
   cp .env.example .env
   ```
   Edit `.env` to configure your MongoDB connection if needed.

### Running the Application

1. Start MongoDB (if not already running):
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community

   # On Linux with systemd
   sudo systemctl start mongod

   # On Windows
   net start MongoDB
   ```

2. Start the backend server (from the `server` directory):
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

3. In a new terminal, start the frontend (from the `src` directory):
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`

## Development

### Frontend Development
```bash
cd src
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Development
```bash
cd server
npm start        # Start server
npm run dev      # Start with nodemon (auto-reload)
```

## Coding Standards

This project follows these coding standards:

- ✅ Use semicolons at the end of each statement
- ✅ Use single quotes for strings
- ✅ Use function-based components in React
- ✅ Use arrow functions for callbacks
- ✅ Modern and clean design principles

## API Documentation

See [API.md](./docs/API.md) for detailed API documentation.

## User Guide

See [USER_GUIDE.md](./docs/USER_GUIDE.md) for the complete user guide.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
