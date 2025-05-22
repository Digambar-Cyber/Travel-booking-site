const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  const data = req.body;
  console.log("Received booking:", data);
  res.status(200).send("Booking received!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("add").value,
  };

  try {
    const res = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Booking submitted to server!");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Failed to send data.");
  }
});
