const submit_button = document.getElementById('submit');
const temp = document.querySelector('.temp');
const name = document.getElementById('location');
const wind_speed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
// var cityName = document.getElementById('name_value');
const apiKey = '25f8704ce87a636134414384d067d31c';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById('name_value').value + "&appid=" + apiKey;

submit_button.addEventListener('click', function() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var tempValue = (data['main']['temp'] - 273).toFixed(1);
        var locationValue = data['name'];
        var windValue = data['wind']['speed'];
        var humidValue = data['main']['humidity'];
        name.innerHTML = locationValue;
        temp.innerHTML = `${tempValue}°C`;
        wind_speed.innerHTML = `${windValue}km/h`;
        humidity.innerHTML = `${humidValue}%`;        
    })
    .catch(err => console.log(err))
})