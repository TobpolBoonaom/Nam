document.addEventListener('DOMContentLoaded', () => {
    const weatherBtn = document.getElementById('get-weather-btn');
    const weatherResult = document.getElementById('weather-result');

    if (weatherBtn) {
        weatherBtn.addEventListener('click', () => {
            const city = document.getElementById('city-input').value;
            if (city) {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87c5830365be040da7bf84ab6b7c95c0&units=metric`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.cod === 200) {
                            weatherResult.innerHTML = `
                                <p><strong>City:</strong> ${data.name}</p>
                                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                            `;
                        } else {
                            weatherResult.innerHTML = `<p>Error: ${data.message}</p>`;
                        }
                    })
                    .catch(error => {
                        weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
                    });
            } else {
                weatherResult.innerHTML = `<p>Please enter a city name</p>`;
            }
        });
    }
});
