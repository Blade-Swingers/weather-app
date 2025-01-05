import React from "react";
import Weather from "./components/Weather"; // Weather component
import Quote from "./components/Quote";   // Quote component
import Location from "./components/Location";

const App = () => {
    return (
        <div>
            <h1>Weather</h1>
            <Location />
            <Weather />
            <Quote />
        </div>
    );
};

export default App;
