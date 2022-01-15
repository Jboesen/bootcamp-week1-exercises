import React, { useState, useEffect } from 'react'
import { GreetHeader, WeatherHeader, ToPage } from './styles.js'

const Greeting = () => {
    const [weather, setWeather] = useState('')
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=41&lon=-97&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
            .then(response => response.json())
            .then(data => setWeather(data.main.feels_like))
    }, []);
    return (
        <div style={{ flexjustifyContent: 'center', backgroundColor: 'skyblue', height: '100vh' }}>
            <GreetHeader align>Hello!</GreetHeader>
            <WeatherHeader>
                It feels like {weather ? weather : "loading..."} degrees out!
            </WeatherHeader>
            <ToPage href={'/reminders'}> Proceed to Reminders </ToPage>
        </div>)
}

export default Greeting


