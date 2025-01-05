import React, { useEffect, useState } from "react";
import axios from "axios";

const Location = () => {
    const [location, setLocation] = useState({ city: "", country: "" });

    useEffect(() => {
        // Fetch location data from ipapi.co
        axios.get("https://ipapi.co/json/")
            .then((response) => {
                const { city, country } = response.data; // Extract city and country_name
                const locationData = { city, country: country };
                setLocation(locationData); // Update state
                sendLocationToBackend(locationData); // Send location to backend immediately
            })
            .catch((error) => {
                console.error("Error fetching location:", error);
            });
    }, []);

    const sendLocationToBackend = (locationData) => {
        // Send the city and country to the backend
        axios.post("http://localhost:3000/api/location", locationData)
            .then((response) => {
                console.log("Location sent successfully:", response.data);
            })
            .catch((error) => {
                console.error("Error sending location to backend:", error);
            });
    };

    return (
        <div>
            <h2>Location Information</h2>
            <p>City: {location.city || "Fetching city..."}</p>
            <p>Country: {location.country || "Fetching country..."}</p>
        </div>
    );
};

export default Location;
