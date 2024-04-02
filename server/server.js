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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
