const submit_button = document.querySelector('#submit');
const temp = document.querySelector('.temp');
const city = document.querySelector('.location');
const wind_speed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const description = document.querySelector('.desc');
const icon = document.querySelector('.weather-icon');
const error = document.querySelector('.warning-message');
const popup = document.querySelector('.pop-up');
const weather_card = document.querySelector('.weather-card');
icon.src = 'https://openweathermap.org/img/wn/10d@2x.png';

submit_button.addEventListener('click', function() {
    const cityName = document.querySelector('#name_value').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=25f8704ce87a636134414384d067d31c`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        city.innerHTML = data['name'];
        temp.innerHTML = `${(data['main']['temp'] - 273).toFixed(1)}°C`;
        wind_speed.innerHTML = `${data.wind.speed}km/h`;
        humidity.innerHTML = `${data.main.humidity}%`;
        const desc_data = data.weather[0].description;
        description.innerHTML = `${desc_data.toUpperCase()}`;
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(err => {
        displayPopUp();
        error.innerHTML = `Invalid city: ${cityName}`;
        console.log(err);
    })
})

function displayPopUp() {
    popup.style.visibility = "visible";
    popup.style.transform = "translate(-50%, -50%) scale(1)";
    popup.style.top = "50%";
    weather_card.style.filter = "blur(4px)";
    city.innerHTML = 'London';
    document.querySelector('#name_value').value = '';
}

function clearPopUp() {
    popup.style.transform = "translate(-50%, -50%) scale(0.1)";
    popup.style.top = "0";
    weather_card.style.filter = "none";
    popup.style.visibility = "hidden";
}