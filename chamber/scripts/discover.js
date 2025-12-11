import { places } from '../data/places.mjs'
console.log(places);

const showPlaces = document.querySelector("#allplaces")

function displayItems(places) {
    places.forEach(element => {

        const thecard = document.createElement('div')

        const thephoto = document.createElement('img')
        thephoto.src = `images/${element.photo_url}`
        thephoto.loading = `lazy`
        thephoto.alt = element.name
        thecard.appendChild(thephoto)

        const thetitle = document.createElement('h2')
        thetitle.innerText = element.name
        thecard.appendChild(thetitle)

        const theaddress = document.createElement('address')
        theaddress.innerText = element.address
        thecard.appendChild(theaddress)

        const thedesc = document.createElement('p')
        thedesc.innerText = element.description
        thecard.appendChild(thedesc)

        showPlaces.appendChild(thecard)

    });

    document.addEventListener("DOMContentLoaded", () => {

        const currentDate = new Date();
        const lastVisit = localStorage.getItem('lastVisit');


        const popup = document.createElement('div');
        popup.id = 'popup';
        popup.classList.add('popup-box');
        const popupContent = document.createElement('div');

        if (lastVisit) {
            const lastVisitDate = new Date(lastVisit);
            const timeDifference = currentDate - lastVisitDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            if (daysDifference < 1) {
                popupContent.textContent = "Back so soon! Awesome!";
            } else if (daysDifference === 1) {
                popupContent.textContent = "You last visited 1 day ago.";
            } else {
                popupContent.textContent = `You last visited ${daysDifference} days ago.`;
            }
        } else {
            popupContent.textContent = "Welcome! Let us know if you have any questions.";
        }

        popup.appendChild(popupContent);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'X';
        closeBtn.classList.add('close-btn');

        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        popup.appendChild(closeBtn);
        document.body.appendChild(popup);

        localStorage.setItem('lastVisit', currentDate);
    });
}

displayItems(places)


