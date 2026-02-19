
const url = "data/banner.json";

async function initBanner() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.images); // temp output test of data response
        //displayImages(data.images);

        const images = data.images;
        let currentIndex = 0;

        const banner = document.getElementById("banner");

        function changeImage() {
            const image = images[currentIndex];
            banner.style.backgroundImage = `url(${image.src})`;
            //banner.innerHTML = `<a href="${image.link}"><img src="${image.src}" alt="${image.alt}"></a>`;
            currentIndex = (currentIndex + 1) % images.length;
        }
        changeImage();
        setInterval(changeImage, 5000);
    } catch (error) {
        console.error(error);
    }
}

initBanner();