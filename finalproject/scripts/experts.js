
const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch("data/experts.json"); // request
    const data = await response.json(); // parse the JSON data
    //console.table(data.prophets); // temp output test of data response
    displayMembers(data.experts);
}
getMembersData();

const displayMembers = (experts) => {
    experts.forEach((expert) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.className = 'members-card';
        let companyName = document.createElement('h2');
        let phone = document.createElement('p')
        let description = document.createElement('p')
        let link = document.createElement('a')
        link.href = 'contact.html';
        let button = document.createElement('button');
        let portrait = document.createElement('img');
        let memberShipLevel = document.createElement('p')
        memberShipLevel.id = 'memberlevel'

        // Build the h2 and p content out to show the member's name and other details
        companyName.textContent = `${expert.name}`;
        phone.textContent = `Contact: ${expert.contact}`;
        description.textContent = `${expert.description}`;
        link.href = `${expert.website}`;
        //webSite.target = '_blank'; // Opens in a new tab
        //webSite.textContent = `Website: ${place.website}`;
        button.textContent = 'Contact Us';

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', expert.src);
        portrait.setAttribute('alt', `Portrait of ${expert.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250');
        portrait.setAttribute('height', '300');

        //memberShipLevel.textContent = `Membership Level: ${place.membershiplevel}`

        // Append the section(card) with the created elements
        card.appendChild(companyName);
        card.appendChild(phone);
        //card.appendChild(webSite);
        card.appendChild(portrait);
        //card.appendChild(memberShipLevel);
        card.appendChild(description);
        link.appendChild(button);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}