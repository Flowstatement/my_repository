const API_KEY = "525d77815f58c3322d8b47b720778b4e";

function onGeoOk(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    console.log("You live in ", lat, lng);
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(URL).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        console.log(data.name);
        console.log(data.weather.main);
        city.innerText = "Location: " + data.name;
        weather.innerText = `Weather: ${data.weather[0].main} \n Temperature: ${data.main.temp}'C \n`;
    });
    // alert(`You live in ${lat}, ${lng}`);
    // console.log(position);
}

function onGeoError() {
    alert("Can't find your location. Please try again");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
