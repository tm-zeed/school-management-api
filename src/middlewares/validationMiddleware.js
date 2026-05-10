const validateSchool = (req, res, next) => {
  const { name, address, latitude, longitude } = req.body;

  // Check empty fields
  if (!name || !address || latitude === undefined || longitude === undefined) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // Validate data types
  if (
    typeof name !== "string" ||
    typeof address !== "string" ||
    typeof latitude !== "number" ||
    typeof longitude !== "number"
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid data types",
    });
  }

  // Validate latitude range
  if (latitude < -90 || latitude > 90) {
    return res.status(400).json({
      success: false,
      message: "Latitude must be between -90 and 90",
    });
  }

  // Validate longitude range
  if (longitude < -180 || longitude > 180) {
    return res.status(400).json({
      success: false,
      message: "Longitude must be between -180 and 180",
    });
  }

  next();
};

module.exports = validateSchool;