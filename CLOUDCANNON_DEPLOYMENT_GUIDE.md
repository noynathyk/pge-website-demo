# Deploying Pingu's English Laos to CloudCannon

This guide will walk you through deploying your React Vite application to CloudCannon. 

## 1. Prerequisites (Already Completed)
We have already prepared the necessary files in your repository for a smooth deployment:
- **`cloudcannon.config.yml`**: Added to the root of your project. This explicitly tells CloudCannon how to build your site (`npm run build`) and where to find the output folder (`dist`).
- **`vite.config.ts` Update**: We updated the `base` path configuration. Previously, it was hardcoded to `/pge-website-demo/` for GitHub Pages. It is now set to intelligently use `/` by default for CloudCannon so your assets (CSS, Images, JS) load correctly.

## 2. Push Your Changes to GitHub
Before heading to CloudCannon, make sure your latest code is pushed to your GitHub repository.

1. Open your terminal in the project directory.
2. Run the following commands:
   ```bash
   git add .
   git commit -m "Add CloudCannon configuration and update base path"
   git push origin main
   ```
   *(Note: replace `main` with your branch name if you are using a different one, like `master`)*

## 3. Create a Site in CloudCannon
1. Go to [CloudCannon](https://app.cloudcannon.com/) and log in or create an account.
2. In your CloudCannon dashboard, click the **"Add Site"** or **"Create Site"** button.
3. Choose **"Build with your own files"** and select **"GitHub"** as your source provider.
4. Authorize CloudCannon to access your GitHub repositories if you haven't already.
5. Select the repository containing your Pingu's English Laos website.
6. Select the branch you want to deploy (e.g., `main`).

## 4. Configure the Build
CloudCannon should automatically detect that this is a Vite project thanks to the `cloudcannon.config.yml` file. However, verify the following settings on the configuration screen:

- **Site Name**: Give your site a name (e.g., `pingus-english-laos`).
- **Build Command**: `npm run build`
- **Output Path**: `dist`
- **Install Command**: `npm install` 
  *(If your project uses `yarn` or `pnpm`, change this to `yarn install` or `pnpm install` respectively, but `npm install` is standard for your project based on `package.json`)*

## 5. Build and Deploy
1. Click **"Build Site"** or **"Create Site"**.
2. CloudCannon will start cloning your repository, installing dependencies, and running the Vite build process.
3. You can watch the output in the **Status** or **Build** tab. It should take around 1-2 minutes.
4. Once the build is marked as **Successful**, CloudCannon will give you a testing URL (e.g., `random-word.cloudcannon.app`).
5. Click on the URL to view your live website!

## 6. (Optional) Custom Domain
If you have a custom domain for Pingu's English Laos (e.g., `pingusenglish.la`):
1. In your CloudCannon site dashboard, go to **Settings > Hosting > Domain**.
2. Enter your custom domain and click **Add Domain**.
3. Follow the on-screen instructions to update your DNS records (adding A records or CNAME records) with your domain provider to point to CloudCannon.
4. CloudCannon will automatically provision an SSL certificate for HTTPS once the DNS propagates.

---
> [!NOTE] 
> **Important Note on GitHub Pages vs CloudCannon**
> If you ever need to deploy back to GitHub Pages, you will need to set the environment variable `VITE_BASE_PATH=/pge-website-demo/` when building, or change the `base` path in `vite.config.ts` back. For CloudCannon, no further action is needed!
