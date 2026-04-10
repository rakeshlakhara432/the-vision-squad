<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/087b47f7-8e24-42e1-87b2-2749402b81b3

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
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
