const key = "f4ed31874e609d890ab1ea210bc326b0";

async function getCurrentWeather(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`, { mode: 'cors' });
        const weatherData = await response.json();
        const resume = {
            name: weatherData.name,
            country: weatherData.sys.country,
            weather: weatherData.weather,
            wind: weatherData.wind,
            temps: weatherData.main,
        };
        return resume;
    } catch (error) {
        alert("No se encontro la ciudad.");
    }
}

async function getWeatherIcon() {
    try {
        const response = await fetch("https://openweathermap.org/img/w/01d.png", { mode: 'cors' });
        console.log(response);
    }
    catch (error) {
        console.log("Could not fetch the icon")
    }
}

export {
    getCurrentWeather,
    getWeatherIcon,
}

