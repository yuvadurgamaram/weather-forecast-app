const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    );

    res.json(response.data);
  } catch (error) {
  console.log(error.response?.data || error.message);
  res.status(500).json({ error: "City not found" });
}
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});