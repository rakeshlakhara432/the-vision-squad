# Arya Fintech Web App

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Deployment to GitHub Pages

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup for GitHub Pages"
   git branch -M main
   git push -u origin main
   ```

2. **Deploy the website:**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to your repository settings on GitHub.
   - Select **Pages** from the sidebar.
   - Under **Build and deployment > Branch**, select `gh-pages` and `/ (root)`.
   - Your site will be live at `https://rakeshlakhara432.github.io/the-vision-squad/`.
