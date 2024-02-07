const apiKey="{your_api_key}"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?appid={your_api_key}&units=metric&q="


const city=document.querySelector(".search")
const btn=document.querySelector(".search-icon")

btn.addEventListener("click",()=>{
    checkWeather(city.value);
})

let cityN=document.querySelector(".city")
let temp=document.querySelector(".temp")
let humidity=document.querySelector(".humidity")
let wind=document.querySelector(".wind")
const weatherIcon = document.querySelector(".weather-icon")
const weather = document.querySelector(".weather")



city.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checkWeather(city.value)
    }
  });

async function checkWeather(city){
    const response= await fetch(apiUrl + `${city}`);
    var data = await response.json();
    // console.log(data)

    weather.style.display="block";
    weatherIcon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    cityN.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp) + `°C`;
    wind.innerHTML=data.wind.speed + ` km/h`;
    humidity.innerHTML=data.main.humidity +` %`;
    
}

//lat-long

async function geoWeather(lat,long){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
    var data = await response.json();
    // console.log(data)

    weather.style.display="block";
    weatherIcon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    cityN.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp) + `°C`;
    wind.innerHTML=data.wind.speed + ` km/h`;
    humidity.innerHTML=data.main.humidity +` %`;
    
}
const successLocation=(position)=>{
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    geoWeather(position.coords.latitude,position.coords.longitude)
}
const errorLocation=(error)=>{
    console.log(error.message)
}

navigator.geolocation.getCurrentPosition(successLocation,errorLocation);
