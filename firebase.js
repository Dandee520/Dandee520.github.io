// Replace these values with your Firebase project's config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://websitedb-386f7-default-rtdb.firebaseio.com/",
    projectId: "websitedb-386f7",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "263979045169",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();