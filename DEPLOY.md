# Deployment Guide

This project is configured to deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

To enable deployment, you need to configure your GitHub repository settings:

1.  **Go to Repository Settings**:
    - Navigate to your repository on GitHub.
    - Click on the **Settings** tab.

2.  **Configure Pages**:
    - In the left sidebar, click on **Pages** (under the "Code and automation" section).

3.  **Select Build Source**:
    - Under **Build and deployment**, find the **Source** dropdown.
    - Change it from **Deploy from a branch** to **GitHub Actions**.

## Environment Configuration

Your application uses Firebase, which requires environment variables during the build process. Since GitHub Actions runs in a fresh environment, you need to provide these variables as **Secrets**.

### Adding Secrets to GitHub

1.  Go to your repository **Settings**.
2.  In the sidebar, click on **Secrets and variables** > **Actions**.
3.  Click **New repository secret**.
4.  Add the following secrets (find the values in your local `.env` file):

    *   `VITE_FIREBASE_API_KEY`
    *   `VITE_FIREBASE_AUTH_DOMAIN`
    *   `VITE_FIREBASE_PROJECT_ID`
    *   `VITE_FIREBASE_STORAGE_BUCKET`
    *   `VITE_FIREBASE_MESSAGING_SENDER_ID`
    *   `VITE_FIREBASE_APP_ID`

> **Note**: Even though these keys are technically exposed in the frontend code, it's best practice to manage them as secrets in CI/CD to keep your repository clean and allow for different environments (e.g., staging vs. production).

## Triggering a Deployment

The deployment workflow `deploy.yml` is configured to run whenever you push a **tag** (e.g., `v1.0.0`, `release-0.1`).

### Steps to Deploy:

1.  **Commit your changes**:
    ```bash
    git add .
    git commit -m "feat: ready for deploy"
    git push origin main
    ```

2.  **Create and push a tag**:
    ```bash
    # Create valid tag
    git tag v0.1.0

    # Push the tag to trigger deployment
    git push origin v0.1.0
    ```

3.  **Monitor Deployment**:
    - Go to the **Actions** tab in your repository.
    - You should see a workflow run named "Deploy to GitHub Pages".
    - Once the workflow completes (green checkmark), your site is deployed.

### Check Your Site
Review the **Settings > Pages** section again to find the live URL of your site (typically `https://<username>.github.io/<repo-name>/`).

## Custom Domain Setup (Cloudflare)

If you have a domain on Cloudflare (e.g., `fablecast.kids`), follow these steps to point it to your GitHub Pages site.

### 1. Configure GitHub Pages

1.  Go to your repository **Settings > Pages**.
2.  Under **Custom domain**, enter your domain (e.g., `www.fablecast.kids` or `fablecast.kids`).
3.  Click **Save**.
   *(This creates a `CNAME` file in your repository)*.
4.  **Wait** for the DNS check to pass (it might fail initially).
5.  Check **Enforce HTTPS**.

### 2. Configure Cloudflare DNS

Log in to your Cloudflare dashboard and go to **DNS > Records**.

**For a Subdomain (e.g., `www.fablecast.kids`):**

| Type | Name | Content | Proxy Status |
| :--- | :--- | :--- | :--- |
| CNAME | `www` | `<your-github-username>.github.io` | Proxied (Orange Cloud) |

**For the Apex Domain (e.g., `fablecast.kids`):**

Add **four** `A` records pointing to GitHub's IP addresses:

| Type | Name | Content | Proxy Status |
| :--- | :--- | :--- | :--- |
| A | `@` | `185.199.108.153` | Proxied (Orange Cloud) |
| A | `@` | `185.199.109.153` | Proxied (Orange Cloud) |
| A | `@` | `185.199.110.153` | Proxied (Orange Cloud) |
| A | `@` | `185.199.111.153` | Proxied (Orange Cloud) |

Also add a `CNAME` for `www` pointing to the apex domain or directly to GitHub, as described above.

### 3. SSL/TLS Setting (Important!)

In Cloudflare, go to **SSL/TLS > Overview**.
Ensure your encryption mode is set to **Full** or **Full (Strict)**.
*   **Do not use "Flexible"**, as it can cause redirect loops with GitHub Pages' HTTPS enforcement.

