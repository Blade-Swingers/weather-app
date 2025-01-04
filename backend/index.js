import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import quote from 'inspirational-quotes';
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/api/weather', (req, res) => {
    // res.json({ message: 'Welcome to the Weather App API' });
    const sampleWeatherData = {
        location: 'New York',
        temperature: '22°C',
        condition: 'Sunny'
    };
    console.log(sampleWeatherData);
    res.json(sampleWeatherData);

});

// Example endpoint to get weather data
app.get('/api/quote', (req, res) => {
    // Replace with actual weather data fetching logic
    const Quote = quote.getRandomQuote();
    console.log(Quote);
    res.json(Quote);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});