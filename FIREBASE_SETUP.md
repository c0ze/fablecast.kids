# Firebase Setup Guide

Follow these steps to configure your Firebase project and get the keys for your `.env` file.

## 1. Create a Project
1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Click **"Add project"** (or "Create a project").
3.  **Name:** Enter `fablecast-kids` (or any name you prefer).
4.  **Google Analytics:** You can toggle this **OFF** for now to speed things up.
5.  Click **"Create project"**.
6.  Wait for it to finish and click **"Continue"**.

## 2. Register Web App (Get Keys)
1.  On the project overview page (the main dashboard), look for the text "Get started by adding Firebase to your app".
2.  Click the **Web** icon (it looks like `</>`).
3.  **App nickname:** Enter `Fablecast Web`.
4.  **Firebase Hosting:** Leave this **unchecked** for now.
5.  Click **"Register app"**.
6.  **Copy Configuration:** You will see a code block with `const firebaseConfig = { ... };`.
    *   Copy the values from this object into your local `.env` file.
    
    **Mapping:**
    *   `apiKey` -> `VITE_FIREBASE_API_KEY`
    *   `authDomain` -> `VITE_FIREBASE_AUTH_DOMAIN`
    *   `projectId` -> `VITE_FIREBASE_PROJECT_ID`
    *   `storageBucket` -> `VITE_FIREBASE_STORAGE_BUCKET`
    *   `messagingSenderId` -> `VITE_FIREBASE_MESSAGING_SENDER_ID`
    *   `appId` -> `VITE_FIREBASE_APP_ID`

7.  Click **"Continue to console"** (you don't need to run `npm install` instructions).

## 3. Enable Google Authentication
1.  In the left sidebar, click **"Build"** -> **"Authentication"**.
2.  Click **"Get started"**.
3.  Select the **"Sign-in method"** tab (if not already there).
4.  Click **"Google"**.
5.  **Enable** the toggle switch in the top right.
6.  **Project support email:** Select your email address from the dropdown.
7.  Click **"Save"**.

## 4. Enable Firestore Database
1.  In the left sidebar, click **"Build"** -> **"Firestore Database"**.
2.  Click **"Create database"**.
3.  **Location:** Choose a location close to you (e.g., `nam5 (us-central)`).
4.  Click **"Next"**.
5.  **Security Rules:** Select **"Start in test mode"**.
    *   *Note: This allows open access for 30 days, which is fine for development.*
6.  Click **"Create"**.

---
**Done!** Once you have updated your `.env` file with the keys from Step 2, restart your development server (`npm run dev`) if it's running, and try logging in!
