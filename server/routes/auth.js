const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// link to json file contacts
const contactsFilePath = path.join(__dirname, "../contacts.json");

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  // READ
  fs.readFile(contactsFilePath, (error, data) => {
    if (error) {
      console.error("Error reading contacts file", error);
      return res.status(500).send("Server error");
    }

    const contacts = JSON.parse(data.toString() || "[]");

    // Add new contact
    contacts.push({ email, password });

    // WRITE
    fs.writeFile(
      contactsFilePath,
      JSON.stringify(contacts, null, 2),
      (error) => {
        if (error) {
          console.error("Error writing to contacts file:", error);
          return res.status(500).send("Server error");
        }
        res.send("Contact added successfully");
      }
    );
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Read the contacts file
  fs.readFile(contactsFilePath, (error, data) => {
    if (error) {
      console.error("Error reading contacts file", error);
      return res.status(500).send("Server error");
    }

    const contacts = JSON.parse(data.toString() || "[]");

    // Find the user by email
    const user = contacts.find((contact) => contact.email === email);

    // Check if user exists and password matches
    if (user && user.password === password) {
      // Here, you would normally proceed with creating a session or generating a token
      // For simplicity, we're just sending a success message
      res.send("Login successful");
    } else {
      // If user doesn't exist or password doesn't match
      res.status(401).send("Invalid credentials");
    }
  });
});

module.exports = router;
