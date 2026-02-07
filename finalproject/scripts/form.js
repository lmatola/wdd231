const hotels = [
  {
    id: "fc-1888",
    name: "Bahia Mar Boutique Hotel",
    price: "$134.5"
  },
  {
    id: "fc-2050",
    name: "Southern Sun",
    price:"$124.7"
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




let bannerStatus = 1;
let bannerTimer = 4000;

window.onload = function(){
    bannerLoop();
}

let startBannerLoop = setInterval(function(){
    bannerLoop();
}, bannerTimer);

document.getElementById("main-banner").onmouseenter = function() {
    clearInterval(startBannerLoop);
}

document.getElementById("main-banner").onmouseleave = function() {
    startBannerLoop = setInterval(function(){
    bannerLoop();
    }, bannerTimer);
}

document.getElementById("imgbanBtn-prev").onclick = function(){
    if(bannerStatus === 1){
        bannerStatus = 2;
    }

    else if(bannerStatus === 2){
        bannerStatus = 3;
    }

    else if(bannerStatus === 3){
        bannerStatus = 1;
    }
    bannerLoop();
        
} 

document.getElementById("imgbanBtn-next").onclick = function(){
    bannerLoop();
}


function bannerLoop() {
    if (bannerStatus ===1){
        document.getElementById("content2").style.opacity = "0";

        setTimeout(function(){
            document.getElementById("content1").style.right = "0px";
            document.getElementById("content1").style.zIndex = "1000";
    
            document.getElementById("content2").style.right = "-1200px";
            document.getElementById("content2").style.zIndex = "1500";
    
            document.getElementById("content3").style.right = "1200px";
            document.getElementById("content3").style.zIndex = "500";

        }, 500);

        setTimeout(function(){
            document.getElementById("content2").style.opacity = "1";
        }, 1000);      

        bannerStatus = 2;
    }


    else if (bannerStatus ===2){
        document.getElementById("content3").style.opacity = "0";

        setTimeout(function(){
            document.getElementById("content2").style.right = "0px";
            document.getElementById("content2").style.zIndex = "1000";
    
            document.getElementById("content3").style.right = "-1200px";
            document.getElementById("content3").style.zIndex = "1500";
    
            document.getElementById("content1").style.right = "1200px";
            document.getElementById("content1").style.zIndex = "500";

        }, 500);

        setTimeout(function(){
            document.getElementById("content3").style.opacity = "1";
        }, 1000);      

        bannerStatus = 3;
    }


    
    else if (bannerStatus ===3){
        document.getElementById("content1").style.opacity = "0";

        setTimeout(function(){
            document.getElementById("content3").style.right = "0px";
            document.getElementById("content3").style.zIndex = "1000";
    
            document.getElementById("content1").style.right = "-1200px";
            document.getElementById("content1").style.zIndex = "1500";
    
            document.getElementById("content2").style.right = "1200px";
            document.getElementById("content2").style.zIndex = "500";

        }, 500);

        setTimeout(function(){
            document.getElementById("content1").style.opacity = "1";
        }, 1000);      

        bannerStatus = 1;
    }

}