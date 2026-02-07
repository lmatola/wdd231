const toggleMenuOpen = () => document.body.classList.toggle("open");


const myLat = '49.75';
const myLon = '6.64';
const myKey = "706d049fda23c82bca65331eb1cda3d0";

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

const myTown = document.querySelector('#town');
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#graphic');
const captionDesc = document.querySelector('figcaption');


async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayCurrentWeather(data) {
    const town = data.name;
    const temp = data.main.temp;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    myTown.innerHTML = `${town}`;
    currentTemp.innerHTML = `${temp} &deg;F`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}


async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast');


    forecastContainer.innerHTML = '';


    const today = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    for (let i = 0; i < data.list.length; i += 8) {
        if (i >= 24) break;

        const dayData = data.list[i];
        const temp = dayData.main.temp;
        const date = new Date(dayData.dt_txt);
        const dayLabel = i === 0 ? 'Today' : daysOfWeek[(today.getDay() + i / 8) % 7]; // Label today and the next two days


        const forecastItem = document.createElement('p');
        forecastItem.textContent = `${dayLabel}: ${temp} °F`;


        forecastContainer.appendChild(forecastItem);
    }
}


fetchCurrentWeather();
fetchForecast();


setInterval(fetchCurrentWeather, 900000);
setInterval(fetchForecast, 900000);



const url = 'data/members.json';
const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    //console.table(data.prophets); // temp output test of data response
    displayMembers(data.members);
}
getMembersData();

const displayMembers = (members) => {

    const eligibleMembers = members.filter(member => member.membershiplevel === '2' || member.membershiplevel === '3');
    console.log('Eligible members:', eligibleMembers);

    eligibleMembers.sort(() => Math.random() - 0.5);

    const selectedMembers = eligibleMembers.slice(0, 3);
    console.log('Selected members:', selectedMembers);

    selectedMembers.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.className = 'members-card';

        let portrait = document.createElement('img');
        let companyName = document.createElement('h2');
        let address = document.createElement('p')
        let phoneNumber = document.createElement('p')
        let webSite = document.createElement('a')

        let memberShipLevel = document.createElement('p')
        memberShipLevel.id = 'memberlevel'


        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250');
        portrait.setAttribute('height', '180');

        // Build the h2 and p content out to show the member's name and other details
        companyName.textContent = `${member.companyname}`;
        address.textContent = `Adress: ${member.address}`;
        phoneNumber.textContent = `Phone: ${member.phonenumber}`;
        webSite.href = `${member.website}`;
        webSite.target = '_blank'; // Opens in a new tab
        webSite.textContent = `Website: ${member.website}`;


        memberShipLevel.textContent = `Membership Level: ${member.membershiplevel}`

        // Append the section(card) with the created elements
        card.appendChild(portrait);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(webSite);
        card.appendChild(memberShipLevel);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

