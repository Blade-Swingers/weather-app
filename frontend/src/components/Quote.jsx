import React, { useEffect, useState } from "react";
import axios from "axios";

const Quote = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        // Fetch a random quote from the backend
        axios.get("http://localhost:3000/api/quote")
            .then((response) => {
                console.log("Quote fetched:", response.data); // Debugging log
                setQuote(response.data); // Update quote with the raw response
            })
            .catch((error) => {
                console.error("Error fetching the quote:", error);
            });
    }, []);

    return (
        <div>
            <h2>Quote</h2>
            {quote ? (
                <p>{quote}</p> // Directly render the quote string
            ) : (
                <p>Loading quote...</p> // Display loading message while fetching
            )}
        </div>
    );
};

export default Quote;
