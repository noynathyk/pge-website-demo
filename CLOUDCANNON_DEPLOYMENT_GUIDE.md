# Deploying Pingu's English Laos to CloudCannon (Direct Upload Method)

If you prefer to manually upload your built website instead of connecting it to GitHub, CloudCannon makes this very easy through their drag-and-drop feature. Here are the exact steps:

## 1. Build the Website Locally
Before you can drag and drop your site, you need to compile the source code into a deployable folder (`dist`).

1. Open your terminal in your project folder (`/Users/noynathykhamchalern/Documents/PGE Website/Web Modern2/pingu's-english-laos/`).
2. Run the build command:
   ```bash
   npm run build
   ```
3. Once finished, a new folder named **`dist`** will be created in your project directory. This folder contains the final, minified HTML, CSS, and JavaScript files for your website.

## 2. Create the Site on CloudCannon
1. Go to [CloudCannon](https://app.cloudcannon.com/) and log in.
2. In your dashboard, click **Add Site** or **Create Site**.
3. When asked how you want to build your site, select **"Upload a folder"** (or similar drag-and-drop option).

## 3. Upload the `dist` Folder
1. CloudCannon will provide a drag-and-drop area.
2. Open **Finder** on your Mac and navigate to your project folder.
3. Locate the **`dist`** folder you just generated.
4. **Drag and drop the entire `dist` folder** into the CloudCannon upload area.
   - *Alternatively, CloudCannon might ask you to zip the folder first. If so, right-click the `dist` folder in Finder, select "Compress 'dist'", and upload the resulting `.zip` file.*

## 4. Deploy and View
1. Because you are uploading pre-built files (the `dist` folder), CloudCannon does not need to run any build commands!
2. It will process the files and immediately give you a testing URL (e.g., `random-word.cloudcannon.app`).
3. Click the URL to see your live website.

## 5. (Optional) Custom Domain
To use a real domain name (e.g., `pingusenglish.la`):
1. In your CloudCannon dashboard, go to **Settings > Hosting > Domain**.
2. Enter your custom domain and follow the instructions to update your DNS records with your domain provider.
3. CloudCannon will automatically secure it with HTTPS.

---
> [!TIP]
> **Updating the site in the future:** Whenever you make changes to the code, simply run `npm run build` again and upload the fresh `dist` folder to the same site in CloudCannon to overwrite the old files.
