import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/weather/${city}`
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤 Weather Forecast Application</h1>

      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br /><br />

      <button onClick={getWeather}>
        Search Weather
      </button>

      {weather && (
        <div
          style={{
            background: "#f0f0f0",
            width: "300px",
            margin: "20px auto",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h2>{weather.name}</h2>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>☁ Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;