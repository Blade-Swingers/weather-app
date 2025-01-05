import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        // Fetch weather data from the backend
        axios.get("http://localhost:3000/api/weather")
            .then((response) => {
                setWeather(response.data); // Update weather data
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }, []);

    return (
        <div>
            <h2>Weather Information</h2>
            {weather ? (
                <div>
                    <p>Temperature: {weather.temperature}</p>
                    <p>Condition: {weather.main}</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather icon" />
                    <p>Description: {weather.description}</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default Weather;
