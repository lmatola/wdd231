
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
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.className = 'members-card';
        let companyName = document.createElement('h2');
        let address = document.createElement('p')
        let phoneNumber = document.createElement('p')
        let webSite = document.createElement('a')
        let portrait = document.createElement('img');
        let memberShipLevel = document.createElement('p')
        memberShipLevel.id = 'memberlevel'

        // Build the h2 and p content out to show the member's name and other details
        companyName.textContent = `${member.companyname}`;
        address.textContent = `Adress: ${member.address}`;
        phoneNumber.textContent = `Phone: ${member.phonenumber}`;
        webSite.href = `${member.website}`;
        webSite.target = '_blank'; // Opens in a new tab
        webSite.textContent = `Website: ${member.website}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250');
        portrait.setAttribute('height', '180');

        memberShipLevel.textContent = `Membership Level: ${member.membershiplevel}`

        // Append the section(card) with the created elements
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(webSite);
        card.appendChild(portrait);
        card.appendChild(memberShipLevel);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

document.addEventListener('DOMContentLoaded', function () {
    const itemsContainer = document.getElementById('cards');
    const gridBtn = document.getElementById('grid-btn');
    const listBtn = document.getElementById('list-btn');

    gridBtn.addEventListener('click', function () {
        itemsContainer.classList.remove('list-view');
        itemsContainer.classList.add('grid-view');
    });

    listBtn.addEventListener('click', function () {
        itemsContainer.classList.remove('grid-view');
        itemsContainer.classList.add('list-view');
    });
});