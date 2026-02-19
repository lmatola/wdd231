
async function initPlaces() {
  try {
    const response = await fetch("data/places.json");
    const data = await response.json();
    console.table(data.places); // temp output test of data response
    //displayImages(data.images);

    const image = data.places;
    let currentIndex = 0;

    const banner2 = document.getElementById("banner2");

    function changePlaces() {
      const place = image[currentIndex];
      banner2.style.backgroundImage = `url(${place.src})`;
      //banner.innerHTML = `<a href="${image.link}"><img src="${image.src}" alt="${image.alt}"></a>`;
      currentIndex = (currentIndex + 1) % place.length;
    }
    changePlaces();
    setInterval(changeImage, 5000);
  } catch (error) {
    console.error(error);
  }
}

initPlaces();