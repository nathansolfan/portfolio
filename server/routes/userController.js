const db = require("../database.js");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Insert email and plaintext password directly into the database
    const [result] = await db.execute(
      "INSERT INTO new_table (email, password) VALUES (?, ?)",
      [email, password]
    );

    res.json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error("Error registering", error);
    res.status(500).json({ message: "Server error", error: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await db.execute(
      "SELECT * FROM new_table WHERE email = ?",
      [email]
    );
    if (users.length > 0) {
      const user = users[0];
      // Compare plaintext passwords
      if (password === user.password) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error logging in", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.update = async (req, res) => {
  const { email, password } = req.body;

  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.feedback = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await db.execute(
      "INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );
    res.json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback", error);
    res.status(500).json({ message: "Server error", error });
  }
};
