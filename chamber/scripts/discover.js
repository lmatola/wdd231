import { places } from '../data/places.mjs'
console.log(places);

const showPlaces = document.querySelector("#allplaces")

function displayItems(places) {
    places.forEach(element => {

        const thecard = document.createElement('div')

        const thephoto = document.createElement('img')
        thephoto.src = `images/${element.photo_url}`
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

}

displayItems(places)