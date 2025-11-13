# 🚀 Deployment Guide

## Quick Deploy to Vercel (3 steps)

### Method 1: Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Navigate to project
cd design-system-web

# 3. Deploy!
vercel --prod
```

Your site will be live in under 60 seconds! 🎉

---

## Method 2: GitHub + Vercel Dashboard

### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
cd design-system-web
git init
git add .
git commit -m "Initial commit: Design System Web"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/design-system-web.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Import Project"**
3. Select your GitHub repository
4. Vercel auto-detects settings:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**

✅ **Done!** Your site is live at `https://your-project.vercel.app`

---

## Method 3: Deploy from Local (No Git)

```bash
# One command deployment
cd design-system-web
vercel --prod
```

Vercel will:
1. Upload your code
2. Install dependencies
3. Build the project
4. Deploy to production

---

## Vercel Configuration

The project includes `vercel.json` with optimized settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures:
- ✅ Proper routing for single-page app
- ✅ Optimized caching for assets
- ✅ Fast builds with Vite

---

## Environment Setup

No environment variables needed! Everything works out of the box.

---

## Build Verification

Before deploying, verify the build works locally:

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Open http://localhost:4173
```

---

## Custom Domain (Optional)

After deployment, add a custom domain in Vercel:

1. Go to your project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your domain
4. Update DNS settings as instructed

---

## Troubleshooting

### Build Fails

**Issue:** `Cannot find module 'framer-plugin'`  
**Fix:** Already removed in this version ✅

**Issue:** Dependencies not installing  
**Fix:** 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Theme Not Working

**Issue:** Theme toggle doesn't switch colors  
**Fix:** Check browser console. Ensure `data-theme` attribute is set on `<html>`

### Components Look Wrong

**Issue:** Styles not loading  
**Fix:** Clear browser cache and hard reload (Cmd/Ctrl + Shift + R)

---

## Performance Tips

The build is already optimized:
- ✅ CSS minification
- ✅ JS code splitting
- ✅ Tree shaking
- ✅ Asset compression

**Bundle size:**
- CSS: ~21 KB (4.3 KB gzipped)
- JS: ~189 KB (60 KB gzipped)

---

## Updating Your Deployment

### With Vercel CLI

```bash
# Make changes, then:
vercel --prod
```

### With GitHub Integration

```bash
# Commit and push:
git add .
git commit -m "Update components"
git push

# Vercel auto-deploys on push ✨
```

---

## Preview Deployments

Every `git push` creates a preview deployment:
- **main branch** → Production (`your-project.vercel.app`)
- **other branches** → Preview URL (`your-project-git-branch.vercel.app`)

---

## Monitoring

View deployment logs and analytics:
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. View **Deployments**, **Analytics**, **Logs**

---

## Cost

**Free tier includes:**
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Global CDN

Perfect for design system showcases! 💯

---

## Next Steps

After deployment:
1. ✅ Test all components in both themes
2. ✅ Share the URL with your team
3. ✅ Add custom domain (optional)
4. ✅ Set up GitHub integration for auto-deploy

---

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Project README](./README.md)

---

**Ready to deploy? Run: `vercel --prod` 🚀**

