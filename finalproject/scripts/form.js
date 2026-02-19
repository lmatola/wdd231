const hotels = [
    {
        id: "fc-1888",
        name: "Bahia Mar Boutique Hotel",
        price: "$134.5"
    },
    {
        id: "fc-2050",
        name: "Southern Sun",
        price: "$124.7"
    },
    {
        id: "fs-1987",
        name: "Radisson Blu Hotel & Residence, Maputo",
        price: "$113.5"
    },
    {
        id: "ac-2000",
        name: "White Pearl Resorts Ponta Mamoli",
        price: "$100.9"
    },
    {
        id: "jj-1969",
        name: "Gala Gala Eco Resort",
        price: "$95.0"
    },

    {
        id: "ac-2000",
        name: "StayEasy Maputo",
        price: "$90.9"
    },
    {
        id: "jj-1969",
        name: "Naara Eco Lodge & Spa",
        price: "$85.0"
    },
    {
        id: "ac-2000",
        name: "Kumba Lodge",
        price: "$80.9"
    },
    {
        id: "jj-1969",
        name: "Villas do Indico Ocean Eco-Resort & Spa",
        price: "$75.0"
    }
];

hotelWindow = document.querySelector("#hotelName")

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

hotels.forEach(hotel => {
    const option = document.createElement("option");
    option.value = hotel.id;
    option.textContent = capitalizeWords(hotel.name);
    hotelWindow.appendChild(option);
});