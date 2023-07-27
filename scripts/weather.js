function getWeather() {
    const selectedCity = document.getElementById("citySelect").value;

    // Check if a city is selected
    if (!selectedCity) {
        const errorDisplay = document.getElementById("errorDisplay");
        errorDisplay.textContent = "Please select a city from the list.";
        // Clear other displayed data
        document.getElementById("cityName").textContent = "";
        document.getElementById("temperature").textContent = "";
        document.getElementById("weatherDescription").textContent = "";
        document.getElementById("weatherIcon").innerHTML = "";
        return;
    }

    // Clear any previous errors
    const errorDisplay = document.getElementById("errorDisplay");
    errorDisplay.textContent = "";

    const apiKey = "YOUR KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const cityName = document.getElementById("cityName");
            const temperature = document.getElementById("temperature");
            const weatherIcon = document.getElementById("weatherIcon");
            const weatherDescription = document.getElementById(
                "weatherDescription"
            );

            cityName.textContent = data.name;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            weatherDescription.textContent = data.weather[0].description;

            const iconCode = data.weather[0].icon;
            const iconUrl = `icons/${iconCode}.png`;

            weatherIcon.innerHTML = `<img src="${iconUrl}" alt="${data.weather[0].description}">`;
        })
        .catch((error) => {
            const errorDisplay = document.getElementById("errorDisplay");
            errorDisplay.textContent = "Error fetching API weather data.";
            console.error("Error fetching API weather data:", error);
        });
}
