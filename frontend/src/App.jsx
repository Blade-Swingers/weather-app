import { useState, useEffect } from 'react'
import  axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState(0)

  useEffect(() => {
    // Fetch the message from the backend
    axios.get('http://localhost:3000/') // Replace with your backend URL
        .then((response) => {
            setMessage(response.data.message); // Extract the message
        })
        .catch((error) => {
            console.error("Error fetching the message:", error);
        });
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App
