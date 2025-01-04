import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        // Fetch data from the backend
        axios.get("http://localhost:3000/api/weather") // Replace with your backend URL
            .then((response) => {
                setWeather(response.data.weather); // Update weather data
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
                    <p>Location: {weather.location}</p>
                    <p>Temperature: {weather.temperature}</p>
                    <p>Condition: {weather.condition}</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default Weather;
