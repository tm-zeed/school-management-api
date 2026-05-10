const { getDB } = require("../config/db");
const calculateDistance = require("../services/distanceService");

// Add School
const addSchool = async (req, res) => {
  try {
    const db = getDB();

    const { name, address, latitude, longitude } = req.body;

    const query =
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

    const [result] = await db.execute(query, [
      name,
      address,
      latitude,
      longitude,
    ]);

    res.status(201).json({
      success: true,
      message: "School added successfully",
      schoolId: result.insertId,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Database Error",
    });
  }
};

// List Schools
const listSchools = async (req, res) => {
  try {
    const db = getDB();

    const userLatitude = parseFloat(req.query.latitude);
    const userLongitude = parseFloat(req.query.longitude);

    // Validate query params
    if (isNaN(userLatitude) || isNaN(userLongitude)) {
      return res.status(400).json({
        success: false,
        message: "Valid latitude and longitude are required",
      });
    }

    const [schools] = await db.execute("SELECT * FROM schools");

    // Calculate distance
    const schoolsWithDistance = schools.map((school) => {
      const distance = calculateDistance(
        userLatitude,
        userLongitude,
        school.latitude,
        school.longitude
      );

      return {
        ...school,
        distance: Number(distance.toFixed(2)),
      };
    });

    // Sort nearest first
    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.status(200).json({
      success: true,
      count: schoolsWithDistance.length,
      schools: schoolsWithDistance,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Database Error",
    });
  }
};

module.exports = {
  addSchool,
  listSchools,
};