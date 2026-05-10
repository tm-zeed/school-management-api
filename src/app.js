const express = require("express");
const cors = require("cors");

const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", schoolRoutes);

// Default Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "School Management API Running",
  });
});

module.exports = app;