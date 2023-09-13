const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Function to send a message
function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== '') {
    db.ref('messages').push({
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

sendButton.addEventListener('click', sendMessage);

// Listen for new messages
db.ref('messages').on('child_added', displayMessage);
