# Deployment Guide - Landing Page

## Deploy to Netlify (Recommended)

### Method 1: Netlify UI (Easiest)

1. **Build the app:**
   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/Login

3. **Deploy:**
   - Drag and drop the `build` folder to Netlify
   - Done! Your site is live

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
npm run build
netlify deploy

# When happy with preview, deploy to production
netlify deploy --prod
```

### Method 3: Git Deployment (Continuous Deployment)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Choose your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Deploy!

3. **Auto-deploy:**
   - Every push to main branch will auto-deploy

---

## Configuration

### Custom Domain

**In Netlify:**
1. Go to Domain settings
2. Add custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic with Netlify)

### Environment Variables

If you need to hide Firebase config:

1. Create `.env` file:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   # ... etc
   ```

2. Update `src/firebase.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
     // ... etc
   };
   ```

3. Add environment variables in Netlify:
   - Site settings → Environment variables
   - Add each variable

---

## Pre-Deployment Checklist

- [ ] Test form in both English and Arabic
- [ ] Test on mobile devices
- [ ] Verify form submissions save to Firebase
- [ ] Replace background.jpg with high-quality image
- [ ] Update logo if needed
- [ ] Test all payment plan options
- [ ] Verify success message displays
- [ ] Check console for errors

---

## Post-Deployment

### Test Live Site

1. Visit your Netlify URL
2. Submit a test form
3. Check dashboard to verify lead was saved
4. Test on mobile device
5. Test in different browsers

### Monitor

- Check Netlify analytics
- Monitor Firebase usage
- Check for errors in Netlify logs

---

## Alternative: Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

---

## Alternative: Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/address",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## Troubleshooting

**Build fails:**
- Check Node.js version (v14+)
- Clear cache: `npm cache clean --force`
- Reinstall: `rm -rf node_modules && npm install`

**Routes not working:**
- Verify `netlify.toml` exists (redirects to index.html)
- Check Netlify logs

**Firebase not connecting:**
- Verify Firebase config is correct
- Check Firestore rules
- Check browser console

---

Your landing page is now live! 🎉

