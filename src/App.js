import axios from "axios";
import { useState } from "react";
import { Axios } from "axios";

function App() 
{
  const [city, setCity] = useState("")

  const [weather, setWeather] = useState("")
  const [temp1, setTemp1] = useState("")
  const [desc, setDesc] = useState("")

  function handleCity(event){
    setCity(event.target.value) 
  }

  function getWeather()
  {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8206064809df36a3c8281a608385e33`)

    weatherData.then(function(success){
      console.log(success.data)
      setWeather(success.data.weather[0].main)
      setTemp1(success.data.main.temp)
      setDesc(success.data.weather[0].description)
    })
  }

  return (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #2c3e50, #3498db)",
    fontFamily: "Arial, sans-serif",
    color: "white"
  }}>
    <div style={{
      background: "rgba(0, 0, 0, 0.6)",
      padding: "40px",
      borderRadius: "15px",
      boxShadow: "0 0 20px rgba(0,0,0,0.7)",
      width: "90%",
      maxWidth: "400px",
      textAlign: "center"
    }}>
      <h2 style={{ marginBottom: "20px", fontSize: "28px" }}>🌤️ Weather Report</h2>
      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        Enter your city below to get the current weather.
      </p>
      <input
        onChange={handleCity}
        type="text"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "15px",
          fontSize: "16px"
        }}
        placeholder="e.g., New York"
      />
      <button
        onClick={getWeather}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#f1c40f",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Get Report
      </button>

      <div style={{
        backgroundColor: "#1abc9c",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.2)"
      }}>
        <h4>🌡️ Temperature: {temp1}°C</h4>
        <h4>☁️ Weather: {weather}</h4>
        <h4>📝 Description: {desc}</h4>
      </div>
    </div>
  </div>
);


}
export default App;
