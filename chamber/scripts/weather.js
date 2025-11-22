const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "706d049fda23c82bca65331eb1cda3d0";
const myLat = '-19.8462892';
const myLon = '34.852085';


const myUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${myLat}&lon=${myLon}&exclude={part}&appid=${myKey}`;

async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }

    ``
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  const temp = data.main.temp;
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const desc = data.weather[0].description;

  currentTemp.innerHTML = `${temp} &deg;F`;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

apiFetch();







