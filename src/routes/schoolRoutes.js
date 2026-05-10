const express = require("express");

const router = express.Router();

const {
  addSchool,
  listSchools,
} = require("../controllers/schoolController");

const validateSchool = require("../middlewares/validationMiddleware");

// Add School Route
router.post("/addSchool", validateSchool, addSchool);

// List Schools Route
router.get("/listSchools", listSchools);

module.exports = router;