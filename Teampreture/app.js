const loadWeather = document.getElementById('btn').addEventListener('click', () => {
    const serachValue = document.getElementById('form-value').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${serachValue}&appid=0ede8db5970f6c75f5de4b8c93efb38f`)
        .then(res => res.json())
        .then(data => showData(data))

})

const showData = (weatherData) => {
    console.log(weatherData);
    const tempData = weatherData.main
    const celsiusText = document.getElementById('celsius')
    celsiusText.innerText = parseInt(tempData.temp - 273.15);

    // Weather chnage
    document.getElementById('weather-leader').innerText = weatherData.weather[0].main

    // city
    document.getElementById('city').innerText = weatherData.name

    // img
    document.getElementById('weather-img').src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
}
// loadWeather()