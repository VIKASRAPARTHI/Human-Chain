# Deployment Guide for HumanChain

This document provides instructions for deploying the HumanChain frontend application to a production environment.

## Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

## Build Process

The application uses Vite to build the React frontend.

## Deployment Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Application

```bash
npm run build
```

This will create a `dist` directory containing the static frontend assets.

## Deployment to Vercel

### Automatic Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration from vercel.json
3. The build command is set to `npm run build`
4. The output directory is set to `dist`

### Manual Deployment with Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy your application:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

## Configuration

The application uses a `vercel.json` file with the following configuration:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

This configuration ensures that all routes are handled by the SPA (Single Page Application).

## Troubleshooting

- If you encounter issues with routing, ensure the vercel.json file is properly configured
- For static asset issues, check that the dist directory contains all the required files
- If you see 404 errors for routes, verify that the catch-all route is properly configured in vercel.json
