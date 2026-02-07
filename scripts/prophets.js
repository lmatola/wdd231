async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // request
    const data = await response.json(); // parse the JSON data
    console.log(data); // temp output test of data response 
}

getData();


const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch('https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json'); // request
    const data = await response.json(); // parse the JSON data
    //console.table(data.prophets); // temp output test of data response
    displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object 
}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.className = 'prophet-card';
        let fullName = document.createElement('h2'); // fill in the blank
        let birthDate = document.createElement('p')
        let birthPlace = document.createElement('p')
        let portrait = document.createElement('img');

        // Build the h2 and p content out to show the prophet's full name and other details
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
        birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
        birthPlace.textContent = `Birth Place: ${prophet.birthplace}`

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', 'auto');
        portrait.setAttribute('height', '320');

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}