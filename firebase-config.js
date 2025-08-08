// Firebase Configuration
// Replace this with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Instructions to set up Firebase:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing one
// 3. Go to Project Settings > General
// 4. Scroll down to "Your apps" section
// 5. Click "Add app" and select Web
// 6. Register your app and copy the config
// 7. Replace the values above with your actual config
// 8. Enable Firestore Database in Firebase Console
// 9. Enable Storage in Firebase Console
// 10. Set up security rules for Firestore and Storage

// Firestore Security Rules (copy to Firebase Console):
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /news/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
*/

// Storage Security Rules (copy to Firebase Console):
/*
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /news/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
*/

export { firebaseConfig }; 