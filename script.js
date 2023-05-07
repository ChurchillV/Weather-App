const submit_button = document.querySelector('.submit-button');
const cityName = 'London';
const apiKey = '25f8704ce87a636134414384d067d31c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + `&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(apiUrl);
    var data = await response.json();

    console.log(data);
}

