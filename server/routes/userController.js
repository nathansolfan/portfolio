const db = require("../database.js");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const saltRounds = 10; // You can adjust salt rounds as needed

  try {
    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(`Hashed password for ${email}:`, hashedPassword); // This will log the hashed password

    // Storing the email and hashed password in the database
    const [result] = await db.execute(
      "INSERT INTO new_table (email, password) VALUES (?, ?)",
      [email, hashedPassword] // Use hashedPassword here
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

  console.log("Logging in with:", email, password); // Log the email and password received from the request

  try {
    const [users] = await db.execute(
      "SELECT * FROM new_table WHERE email = ?",
      [email]
    );
    console.log("Users found:", users); // Log the users found with the given email

    if (users.length > 0) {
      const user = users[0];
      console.log("User found:", user); // Log the user data retrieved from the database

      // Use bcrypt to compare the hashed password
      const match = await bcrypt.compare(password, user.password);
      console.log("Password match:", match); // Log the result of the password comparison

      if (match) {
        // User authenticated, proceed with login logic (e.g., token generation)
        res.json({ message: "Login successful" });
      } else {
        console.log("Password does not match"); // Log password mismatch
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      console.log("User not found"); // Log when no user is found
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error logging in", error); // Log any errors
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
