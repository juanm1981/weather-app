import "./style.css"
import { getCurrentWeather, getWeatherIcon } from "./weather.js";
import { renderCard } from "./ui.js";
document.getElementById('search-button').addEventListener('click',
    () => { renderCard() });

