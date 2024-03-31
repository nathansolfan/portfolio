const db = require("../database");

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
