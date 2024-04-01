require("dotenv").config();
const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth");
const cors = require("cors");
const mysql = require("mysql2");
console.log(process.env);
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
