// Persist mode on load
window.onload = function () {
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// Toggle Mode and store preference
function toggleMode() {
  const audio = document.getElementById("toggleSound");
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("mode", isDark ? "dark" : "light");

  // Play sound
  audio.currentTime = 0;
  audio.play();
}

// Chatbot logic
function handleChat(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
    if (message === "") return;

    addChat("user", message);
    input.value = "";

    // Simulated AI reply
    setTimeout(() => {
      const reply = getBotReply(message);
      addChat("bot", reply);
    }, 600);
  }
}

function addChat(sender, message) {
  const chatBody = document.getElementById("chat-body");
  const msgDiv = document.createElement("div");
  msgDiv.className = "chat-msg " + sender;
  msgDiv.textContent = message;
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! I'm your AI travel assistant. How can I help you today?";
  } else if (msg.includes("price") || msg.includes("cost")) {
    return "Dubai trip packages start from ₹35,000 including flight and hotel.";
  } else if (msg.includes("passport")) {
    return "Yes, a valid passport is required for Dubai travel.";
  } else if (msg.includes("visa")) {
    return "You need a tourist visa. We can help with that!";
  } else {
    return "I'm still learning. For now, I can help with bookings, prices, and documents.";
  }
}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const userData = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("add").value,
  };

  localStorage.setItem("travelBooking", JSON.stringify(userData));
  alert("Form data saved locally!");

  this.reset(); // Reset form
});
