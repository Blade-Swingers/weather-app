import React, { useEffect, useState } from "react";
import axios from "axios";

const Quotes = () => {
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        axios.get("http://localhost:3000/api/quotes") // Replace with your backend URL
            .then((response) => {
                setQuote(response.data.quote || []); // Update quote data
            })
            .catch((error) => {
                console.error("Error fetching quote data:", error);
            });
    }, []);

    return (
        <div>
            <h2>Quote</h2>
            {quote.length > 0 ? (
                <ul>
                    {quote.map((quote, index) => (
                        <li key={index}>{quote}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading quote...</p>
            )}
        </div>
    );
};

export default Quote;
