import React from "react";
import Weather from "./assets/weather"; // Adjust the path as needed
import Quotes from "./assets/quote";   // Adjust the path as needed

const App = () => {
    return (
        <div>
            <h1>Weather App</h1>
            <Weather />
            <Quotes />
        </div>
    );
};

export default App;
