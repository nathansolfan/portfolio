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
module.exports = router;
