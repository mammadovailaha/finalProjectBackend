const express = require("express");
const router = express.Router();

// Test üçün sadə user array
const users = [
  { id: 1, name: "İlaha" },
  { id: 2, name: "Aysel" },
];

// Bütün istifadəçiləri gətir
router.get("/", (req, res) => {
  res.status(200).json(users);
});

// Yeni istifadəçi əlavə et
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
