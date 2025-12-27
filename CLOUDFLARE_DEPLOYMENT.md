# Cloudflare Pages Deployment Guide

This guide will help you deploy the MyDotNetNg application to Cloudflare Pages with serverless functions.

## 🚀 Architecture Overview

The application is deployed as a modern, fully serverless stack on Cloudflare:

- **Frontend**: React + Vite app hosted on Cloudflare Pages
- **Backend**: Cloudflare Functions (serverless API endpoints)
- **Database**: Cloudflare D1 (SQLite-based serverless database)
- **CDN**: Global edge network for ultra-fast delivery

## 📋 Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI**: Install globally
   ```bash
   npm install -g wrangler
   ```
3. **GitHub Repository**: Your code should be in a GitHub repo
4. **Node.js**: Version 18 or higher

## 🔧 Initial Setup

### 1. Authenticate with Cloudflare

```bash
wrangler login
```

This will open a browser window to authorize Wrangler.

### 2. Create D1 Database

```bash
# Create production database
wrangler d1 create task-manager-db

# Note the database_id from the output and update wrangler.toml
```

Update the `database_id` in `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "task-manager-db"
database_id = "your-database-id-here"  # Replace with actual ID
```

### 3. Run Database Migrations

```bash
# Apply the schema to your database
wrangler d1 execute task-manager-db --file=./migrations/0001_create_tasks_table.sql
```

### 4. Set Up GitHub Secrets

In your GitHub repository, add these secrets (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_API_TOKEN`: Get from Cloudflare Dashboard → My Profile → API Tokens
  - Use "Edit Cloudflare Workers" template or create custom token with:
    - Account: Cloudflare Pages: Edit
    - Account: D1: Edit
- `CLOUDFLARE_ACCOUNT_ID`: Get from Cloudflare Dashboard → Workers & Pages → Account ID

## 🏗️ Local Development

### 1. Install Dependencies

```bash
cd src
npm install
```

### 2. Run Development Server

For the React frontend with Vite:
```bash
cd src
npm run dev
```

For testing Cloudflare Functions locally:
```bash
# From project root
wrangler pages dev src/dist --compatibility-date=2024-01-01
```

## 📦 Build and Deploy

### Automatic Deployment (Recommended)

The application auto-deploys on every push to `main` or your feature branch via GitHub Actions.

Just push your code:
```bash
git add .
git commit -m "Deploy to Cloudflare Pages"
git push origin main
```

### Manual Deployment

If you prefer manual deployment:

```bash
# 1. Build the frontend
cd src
npm run build

# 2. Deploy to Cloudflare Pages
cd ..
wrangler pages deploy src/dist --project-name=mydotnetng-app
```

## 🌐 Custom Domain Setup

1. Go to Cloudflare Dashboard → Pages → your project
2. Click "Custom domains"
3. Add your domain (e.g., `app.yourdomain.com`)
4. Follow DNS setup instructions

Cloudflare automatically provisions SSL certificates!

## 🗄️ Database Management

### View Data

```bash
wrangler d1 execute task-manager-db --command="SELECT * FROM tasks"
```

### Add Test Data

```bash
wrangler d1 execute task-manager-db --command="INSERT INTO tasks (title, description, completed, created_at) VALUES ('Test Task', 'This is a test', 0, datetime('now'))"
```

### Clear All Data

```bash
wrangler d1 execute task-manager-db --command="DELETE FROM tasks"
```

## 📊 Monitoring and Analytics

1. **Dashboard**: Visit [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Pages Analytics**: Workers & Pages → your project → Analytics
3. **Function Logs**: Real-time logs in the Functions tab
4. **D1 Metrics**: Database → your database → Metrics

## 🔒 Environment Variables

To add environment variables:

```bash
# Via wrangler.toml
[vars]
MY_VARIABLE = "value"

# Or via Cloudflare Dashboard
# Pages → Settings → Environment variables
```

## 🐛 Troubleshooting

### Build Failures

Check the build logs in GitHub Actions or Cloudflare Dashboard.

Common issues:
- Node version mismatch → Ensure `package.json` engines field is set
- Missing dependencies → Run `npm install` locally first

### Database Connection Issues

```bash
# Verify database exists
wrangler d1 list

# Check bindings in wrangler.toml match
wrangler pages deployment list
```

### CORS Errors

All API endpoints include CORS headers. If you still see errors:
- Check browser console for specific error
- Verify the API endpoint URL matches your deployment URL

## 📈 Performance Tips

1. **Edge Caching**: Cloudflare automatically caches static assets
2. **Smart Placement**: D1 data is automatically placed near your users
3. **Image Optimization**: Use Cloudflare Images for optimized delivery

## 🔄 Rollback Deployment

```bash
# List deployments
wrangler pages deployment list --project-name=mydotnetng-app

# Promote a specific deployment to production
wrangler pages deployment tail
```

Or use the Cloudflare Dashboard → Pages → Deployments → Rollback

## 📚 Additional Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Cloudflare Functions](https://developers.cloudflare.com/pages/functions)
- [D1 Database Docs](https://developers.cloudflare.com/d1)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler)

## 🎉 Success!

Once deployed, your application will be available at:
- **Production**: `https://mydotnetng-app.pages.dev`
- **Custom Domain**: `https://your-domain.com` (if configured)

All API endpoints are available at `/api/*` routes on the same domain.

## 💰 Cost Estimate

Cloudflare's free tier includes:
- ✅ 500 builds per month
- ✅ Unlimited requests
- ✅ Unlimited bandwidth
- ✅ 100,000 Function requests/day
- ✅ 5GB D1 storage
- ✅ 5 million D1 reads/day

Perfect for small to medium applications! 🚀
