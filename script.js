// Simulate a conversation with the virtual assistant
const chatWindow = document.querySelector('.chat-window');

// Function to append bot message
function appendBotMessage(message) {
  const chatBubble = document.createElement('div');
  chatBubble.classList.add('chat-bubble');
  chatBubble.innerHTML = `<p>${message}</p>`;
  chatWindow.appendChild(chatBubble);
}

// Initial greeting
appendBotMessage("Hi there, I am Aditya More. Thank you for visiting my portfolio website.");

appendBotMessage("Let me walk you through my portfolio website.")
// Function to simulate blinking cursor animation
function simulateBlinkingCursor(callback) {
  const cursorElement = document.createElement('span');
  cursorElement.classList.add('cursor');
  const chatBubble = document.querySelector('.chat-bubble:last-child'); // Select the last chat bubble
  chatBubble.classList.add('with-cursor'); // Add class for cursor animation
  chatBubble.appendChild(cursorElement);
  
  setTimeout(() => {
    cursorElement.remove(); // Remove the cursor after 5 seconds
    chatBubble.classList.remove('with-cursor'); // Remove cursor animation class
    callback(); // Call the callback function after the animation is over
  }, 5000);
}

appendBotMessage("Let's start with my qualifications...")

// Call function to simulate blinking cursor animation
simulateBlinkingCursor(() => {
  // After the cursor animation is over, append the bot message within a new chat bubble
  appendBotMessage("Qualifications: B.E(Computer Engineering) from Marathwada Mitra Mandal's Institute of Technology, Lohegaon.");
});

