// server.js

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// In-memory user storage
let users = [];

// Routes
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (username.length < 3 || password.length < 6) {
    return res.status(400).send("Invalid credentials.");
  }

  const userExists = users.find(u => u.username === username);
  if (userExists) return res.status(409).send("User already exists.");

  users.push({ username, password });
  res.status(200).send("Signup successful.");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).send("Invalid login.");
  res.status(200).send("Login successful.");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
