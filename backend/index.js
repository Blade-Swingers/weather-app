import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import quote from 'inspirational-quotes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Global variables to store city and country
let globalLocation = {
    city: null,
    country: null,
};

// Routes
// Example POST endpoint to receive location
app.post('/api/location', (req, res) => {
    const { city, country } = req.body;

    // Save city and country globally
    globalLocation.city = city;
    globalLocation.country = country;

    // console.log(`City: ${city}, Country: ${country}`);
    // res.json({ message: 'Location saved successfully', location: globalLocation });
});

// Example GET endpoint to fetch weather data
app.get('/api/weather', async (req, res) => {
    // Check if city and country are set
    if (!globalLocation.city || !globalLocation.country) {
        return res.status(400).json({ error: 'Location not set. Please set the location first using POST /api/location.' });
    }
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = '31c05e668b5c8a8b5bd06745b22e6660';
    const url = `${baseURL}?q=${globalLocation.city},${globalLocation.country}&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        const weatherData = {
            temperature: Math.round((json.main.temp - 273.15) * 9/5 + 32),
            description: json.weather[0].description,
            main: json.weather[0].main,
            icon: json.weather[0].icon,
        };
        console.log(json);
        res.json(weatherData);
    } catch (error) {
        console.error(error.message);
    }
});

// Example endpoint to get a random quote
app.get('/api/quote', (req, res) => {
    const Quote = quote.getRandomQuote();
    res.json(Quote);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
