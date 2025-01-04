import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Weather App API' });
});

// Example endpoint to get weather data
app.get('/weather', (req, res) => {
    // Replace with actual weather data fetching logic
    const sampleWeatherData = {
        location: 'New York',
        temperature: '22°C',
        condition: 'Sunny'
    };
    res.json(sampleWeatherData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});