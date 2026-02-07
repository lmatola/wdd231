// Select the HTML element to manipulate
const lastModified = document.querySelector('#lastModified');
const year = document.querySelector("#currentyear");

const today = new Date();

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
};

lastModified.innerHTML = `Last Modification: ` + new Date().toLocaleDateString("en-US", options);
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;