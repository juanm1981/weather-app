import { getCurrentWeather } from "./weather.js";

async function renderCard() {
    deleteCard();
    const res = await getCurrentWeather(document.getElementById('location').value);
    console.log(res);
    if (res != undefined) {
        const container = document.getElementById('container');
        let card = document.createElement('div');
        card.className = 'card';
        card.id = 'card';
        //--------Icono del clima-------//
        let wIcon = document.createElement('div');
        wIcon.className = 'weather-icon';
        let icon = document.createElement('img');
        icon.className = 'wIcon';
        icon.src = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
        wIcon.appendChild(icon);
        //--------Pais, Ciudad y Temperatura.---------//
        let tDate = document.createElement('div');
        tDate.className = 'temp-date';
        let temperature = document.createElement('h1');
        temperature.textContent = Math.round((res.temps.temp - 273.15) * 10) / 10 + "°c";
        let cityName = document.createElement('h2');
        cityName.textContent = res.name + ". (" + res.country + ")";
        tDate.appendChild(temperature);
        tDate.appendChild(cityName);
        //--------Vientos, datos extras.-------//
        let extras = document.createElement('div');
        extras.className = 'extras';
        let minmax = document.createElement('p');
        minmax.textContent = "Min: " + Math.round((res.temps.temp_min - 273.15) * 10) / 10 + `°c\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0` + `    Max: ` + Math.round((res.temps.temp_max - 273.15) * 10) / 10 + "°c";
        let humidity = document.createElement('p');
        humidity.textContent = "Humidity: " + res.temps.humidity + "%";
        let wind = document.createElement('p');
        wind.textContent = "WS:" + res.wind.speed + "M/s" + `\xa0\xa0\xa0` + "WD:" + res.wind.deg + "°";
        extras.appendChild(minmax);
        extras.appendChild(humidity);
        extras.appendChild(wind);
        //------appends-------//
        card.appendChild(wIcon);
        card.appendChild(tDate);
        card.appendChild(extras);
        container.prepend(card);
    }
}

function deleteCard() {
    let node = document.getElementById('card');
    if (node != null) {
        node.remove();
    }
}

export {
    renderCard,
}