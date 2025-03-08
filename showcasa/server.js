import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//cors
app.use(cors("*"));

// Middleware
app.use(bodyParser.json());

// File path for users.json
const USERS_FILE = path.join(__dirname, "users.json");

const readUsers = () => {
  return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
};

const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
};

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ email, password });
  writeUsers(users);
  res.status(201).json({ message: "Signup successful" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login successful" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
