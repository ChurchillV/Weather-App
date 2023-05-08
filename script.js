const submit_button = document.getElementById('submit');
const temp = document.querySelector('.temp');
const name = document.getElementById('location');
const wind_speed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const apiKey = '25f8704ce87a636134414384d067d31c';

submit_button.addEventListener('click', function() {
    const cityName = document.querySelector('#name_value').value;
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(cityName);
        name.innerHTML = data['name'];
        temp.innerHTML = `${(data['main']['temp'] - 273).toFixed(1)}°C`;
        wind_speed.innerHTML = `${data['wind']['speed']}km/h`;
        humidity.innerHTML = `${data['main']['humidity']}%`;        
    })
    .catch(err => console.log(err))
})