# 🚀 Quick Start Guide

Get your app running on Cloudflare Pages in under 5 minutes!

## Option 1: Automatic Deployment (GitHub)

### Step 1: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. Click "Create a project" → "Connect to Git"
3. Select this repository
4. Configure build settings:
   - **Build command**: `cd src && npm install && npm run build`
   - **Build output directory**: `src/dist`
   - **Root directory**: `/`

### Step 2: Set Up Database

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create database
wrangler d1 create task-manager-db

# Copy the database_id and update wrangler.toml

# Initialize database schema
wrangler d1 execute task-manager-db --file=./migrations/0001_create_tasks_table.sql
```

### Step 3: Configure GitHub Secrets

Add to your repo's Settings → Secrets:
- `CLOUDFLARE_API_TOKEN`: Get from Cloudflare Dashboard
- `CLOUDFLARE_ACCOUNT_ID`: Get from Cloudflare Dashboard

### Step 4: Deploy!

Just push to your branch:
```bash
git push origin main
```

GitHub Actions will automatically build and deploy! 🎉

---

## Option 2: Manual Deployment (Wrangler CLI)

### Prerequisites

```bash
npm install -g wrangler
wrangler login
```

### Deploy in 3 Commands

```bash
# 1. Build the app
npm install
cd src && npm install && npm run build && cd ..

# 2. Create and initialize database
wrangler d1 create task-manager-db
# Update database_id in wrangler.toml
wrangler d1 execute task-manager-db --file=./migrations/0001_create_tasks_table.sql

# 3. Deploy to Cloudflare Pages
wrangler pages deploy src/dist --project-name=mydotnetng-app
```

---

## Option 3: Local Development

### Run Locally

```bash
# Install dependencies
cd src
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:3000` 🎨

### Test Cloudflare Functions Locally

```bash
# Build first
cd src && npm run build && cd ..

# Run with Wrangler
wrangler pages dev src/dist
```

---

## 🎯 What You Get

- ✅ **Global CDN**: Your app on 300+ edge locations worldwide
- ✅ **Serverless API**: No servers to manage, scales automatically
- ✅ **Database**: Cloudflare D1 (SQLite) with automatic backups
- ✅ **SSL**: Free HTTPS certificates
- ✅ **Analytics**: Built-in traffic insights
- ✅ **Zero Cost**: Free tier includes everything you need!

---

## 📱 Access Your App

After deployment, find your URL at:
- **Cloudflare Pages**: `https://mydotnetng-app.pages.dev`
- **Custom Domain**: Add your own domain in Cloudflare Dashboard

---

## 🆘 Need Help?

- 📖 [Full Deployment Guide](./CLOUDFLARE_DEPLOYMENT.md)
- 🐛 [Troubleshooting](./CLOUDFLARE_DEPLOYMENT.md#-troubleshooting)
- 💬 [Cloudflare Community](https://community.cloudflare.com)

---

## 🎉 Next Steps

1. **Custom Domain**: Add your domain in Pages → Custom domains
2. **Environment Variables**: Configure in Pages → Settings
3. **Analytics**: Monitor traffic in Pages → Analytics
4. **Scale**: Upgrade plan if you exceed free tier limits

Happy coding! 🚀
