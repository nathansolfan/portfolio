const db = require("../database");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [result] = await db.execute(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, password]
    );
    res.json({
      message: "User registered succesfully",
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
    const [users] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (users.length > 0) {
      const user = users[0];
      // Use bcrypt to compare the hashed password
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // User authenticated, proceed with login logic (e.g., token generation)
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
