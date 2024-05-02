
async function WeatherData() {
    const CityName = document.querySelector('.input').value;
    let latitide;
    let longitude;
    const placeName = document.querySelector('.City')
    const temperature = document.querySelector('.temp')
    const temp = document.querySelector('.text-temp')
    const wind = document.querySelector('.text-wind')
    const desc = document.querySelector('#desc')
    const pressure = document.querySelector('.text-pressure')
    const humidity = document.querySelector('.text-humidity')
    const logo = document.querySelector('.image')
    const APIKey = 'b30dc99112c6717815870fab55f7ff5e';
    try{
        const georesponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${CityName}&limit=5&appid=${APIKey}`);
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitide}&lon=${longitude}&appid=${APIKey}`);
        if(!georesponse.ok && !weatherResponse.ok){
            throw new error("Data not found!")
        }
        const geodata = await georesponse.json();
        const weatherdata = await weatherResponse.json();
        latitide = geodata[0].lat;
        longitude = geodata[0].lon;
        console.log(geodata);
        console.log(weatherdata);
        placeName.textContent = CityName
        temperature.textContent = `${((weatherdata.main.temp) - 273).toFixed(2)} °C`;
        temp.textContent = `${((weatherdata.main.temp) - 273).toFixed(2)} °C`;
        wind.textContent = `${weatherdata.wind.speed} m/s`;
        pressure.textContent = `${weatherdata.main.pressure} hPa`;
        humidity.textContent = `${weatherdata.main.humidity} %`;
        desc.textContent = weatherdata.weather[0].description;
        switch(true){
            case (weatherdata[1].id >= 200 && weatherdata[1].id <300) : logo.textContent = "⛈";break;
            case (weatherdata[1].id >= 300 && weatherdata[1].id <500) : logo.textContent = "🌧";break;
            case (weatherdata[1].id >= 500 && weatherdata[1].id <600) : logo.textContent = "🌦";break;
            case (weatherdata[1].id >= 600 && weatherdata[1].id <700) : logo.textContent = "❄";break;
            case (weatherdata[1].id >= 700 && weatherdata[1].id <800) : logo.textContent = "🌫";break;
            case (weatherdata[1].id >=800) : logo.textContent = "☁";break;
            
        }
        let latitide = 0;
        let longitude = 0;
    }
    catch(error){
        console.log("Error");
    }
}




// getWeather();
// async function getWeather(){
//     const apiKey = "b30dc99112c6717815870fab55f7ff5e"
//     const cityName = document.getElementById("inputField").value;
//     const place = document.querySelector(".placeName");
//     const temp = document.querySelector(".temperature");
//     try{
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
//         if(!response.ok){
//             throw new error("Data not found!")
//         }
//         const data = await response.json();
//         const placeName = data.name;
//         const temperature = `${((data.main.temp) - 273).toFixed(2)} deg`;
//         place.textContent = placeName;
//         temp.textContent = temperature;
//         console.log(data);
//         console.log(data.name)
//         console.log(data.main.temp)
//     }
//     catch(error){
//         console.log("Error");
//     }
// }