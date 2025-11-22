
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "77cc650ead08da0d1ff3c9fd73d7e005";


weatherForm.addEventListener("submit", async event => {

    event.preventDefault();
    const city = cityInput.value;

    if (city) {
        try{
            const weatherData = await getWeathetData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else {
        displayError("Please Enter a City");
    }
});

function getWeathetData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${apiKey}&units=imperial`;

};

function displayWeatherInfo(data) {

};

function getEmoji(weatherId) {

};

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
};