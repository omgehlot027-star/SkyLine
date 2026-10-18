
const API_KEY = "43c2a91ee0b24e5ea1d73624261810";

const cityName = document.getElementById("city_name");
const input = document.getElementById("input");

const button = document.getElementById("button");
const dateTime = document.getElementById("date-time");
const icon = document.getElementById("day-icon");

const temp = document.getElementById("temp-val");
const condition = document.getElementById("condition");
const feels = document.getElementById("feels");

const humidity = document.getElementById("Humidity");
const moisture = document.getElementById("moisture");

const wind = document.getElementById("wind");
const direction = document.getElementById("direction");

const percep = document.getElementById("precep");
const drycondn = document.getElementById("perception");

const sky = document.getElementById("sky");
const visibility = document.getElementById("condn");


const day1 = document.getElementById("day1");
const temp1 = document.getElementById("temp1");

const day2 = document.getElementById("day2");
const temp2 = document.getElementById("temp2");

const day3 = document.getElementById("day3");
const temp3 = document.getElementById("temp3");

const day4 = document.getElementById("day4");
const temp4 = document.getElementById("temp4");

const day5 = document.getElementById("day5");
const temp5 = document.getElementById("temp5");



async function fetchWeather() {

    const city = input.value.trim(); 

    
    if (!city) {
        alert("Please enter a city or country name first!");
        return;
    }


    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }

        
        const data = await response.json();
        console.log("Stored Weather Data:", data);

    
        cityName.textContent = data.location.name + ", " + data.location.country;
        dateTime.textContent = data.location.localtime;
        
        temp.textContent = data.current.temp_c;
        condition.textContent = data.current.condition.text;
        feels.textContent = `Feels like ${data.current.feelslike_c}°C`;

        humidity.textContent = `${data.current.humidity}%`;
        moisture.textContent = data.current.humidity > 70 ? "High moisture" : "Normal moisture";

        wind.textContent = `${data.current.wind_kph} km/h`;
        direction.textContent = `From the ${data.current.wind_dir}`;

        percep.textContent = `${data.current.precip_mm} mm`;
        drycondn.textContent = data.current.precip_mm === 0 ? "Dry conditions" : "Wet conditions";

        sky.textContent = data.current.is_day === 1 ? "Day" : "Night";
        visibility.textContent = `${data.current.vis_km} km`;

        

    } catch (error) {
        console.error("Error:", error);
        alert("Could not load weather. Please check the city name and try again.");
    }
}



button.addEventListener("click", fetchWeather);


input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        fetchWeather();
    }
});