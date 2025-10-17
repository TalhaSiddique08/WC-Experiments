// weatherApp.js

const axios = require("axios");

console.log("🌤️ Weather App Started");

// 1 Callback Example
function getWeatherWithCallback(city, callback) {
  console.log(`📡 Fetching weather for ${city}...`);
  setTimeout(() => {
    const dummyData = { city, temp: 28, condition: "Sunny" };
    callback(dummyData);
  }, 2000); // simulates delay
}

getWeatherWithCallback("Delhi", (data) => {
  console.log(`🌞 Callback -> ${data.city}: ${data.temp}°C, ${data.condition}`);
});

// 2 Async/Await Example (Real API)
async function getWeatherAsync(city) {
  try {
    console.log(`🔄 Fetching real weather data for ${city}...`);

    // Use a free API (you can replace with your own key)
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true`
    );

    console.log(
      `✅ Async/Await -> ${city}: ${response.data.current_weather.temperature}°C`
    );
  } catch (error) {
    console.log("❌ Error fetching weather:", error.message);
  }
}

getWeatherAsync("Delhi");

// 3️ Event Loop Demo
setTimeout(() => console.log("⌛ Event loop message (setTimeout done)"), 0);

console.log("🏁 Program end reached (but async tasks still running...)");