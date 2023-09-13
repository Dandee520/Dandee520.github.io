// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

// Replace these values with your Firebase project's config
const firebaseConfig = {
    apiKey: "AIzaSyDTF1KkR-hZ5HIWWxLw5YHMaRuPFdgbihA",
    authDomain: "websitedb-386f7.firebaseapp.com",
    databaseURL: "https://websitedb-386f7-default-rtdb.firebaseio.com",
    projectId: "websitedb-386f7",
    storageBucket: "websitedb-386f7.appspot.com",
    messagingSenderId: "263979045169",
    appId: "1:263979045169:web:f260dc91f150166225a010",
    measurementId: "G-1LG7JRGT3P"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the database
const db = getDatabase(firebaseApp);

// Function to send a message
function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== '') {
    const messageRef = ref(db, 'messages');
    push(messageRef, {
      text: message,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    messageInput.value = '';
  }
}

// Function to display messages
function displayMessage(snapshot) {
  const message = snapshot.val();
  const messageElement = document.createElement('div');
  messageElement.innerText = message.text;
  chatMessages.appendChild(messageElement);
}