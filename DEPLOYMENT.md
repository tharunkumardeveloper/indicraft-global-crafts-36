# Deployment Instructions for Vercel

## Environment Variables

Before deploying to Vercel, make sure to add the following environment variable in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variable:

```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

Replace `your_groq_api_key_here` with your actual Groq API key.

## Automatic Deployment

This project is configured to automatically deploy when you push to the `main` branch.

## Manual Deployment

If you need to deploy manually:

```bash
npm run build
vercel --prod
```

## Vercel Configuration

The `vercel.json` file is already configured to handle React Router properly, preventing 404 errors on page refresh.

## Image Assets

All product images are stored in the `public/product/` directory and will be automatically served by Vercel.
