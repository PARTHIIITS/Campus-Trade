// Dummy data for ads
const ads = [{
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Samsung Galaxy S21 Ultra",
        price: "900",
        description: "Samsung Galaxy S21 Ultra 5G with 12GB RAM and 256GB storage. Brand new and sealed in box."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Macbook Pro 16 inch",
        price: "1,500",
        description: "Macbook Pro 16 inch with 16GB RAM and 512GB storage. Like new condition with no scratches or dents."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Bose QuietComfort 35 II",
        price: "350",
        description: "Bose QuietComfort 35 II wireless headphones in pristine condition. Comes with original box and accessories."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Samsung Galaxy S21 Ultra",
        price: "900",
        description: "Samsung Galaxy S21 Ultra 5G with 12GB RAM and 256GB storage. Brand new and sealed in box."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Macbook Pro 16 inch",
        price: "1,500",
        description: "Macbook Pro 16 inch with 16GB RAM and 512GB storage. Like new condition with no scratches or dents."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Bose QuietComfort 35 II",
        price: "350",
        description: "Bose QuietComfort 35 II wireless headphones in pristine condition. Comes with original box and accessories."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Samsung Galaxy S21 Ultra",
        price: "900",
        description: "Samsung Galaxy S21 Ultra 5G with 12GB RAM and 256GB storage. Brand new and sealed in box."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Macbook Pro 16 inch",
        price: "1,500",
        description: "Macbook Pro 16 inch with 16GB RAM and 512GB storage. Like new condition with no scratches or dents."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Bose QuietComfort 35 II",
        price: "350",
        description: "Bose QuietComfort 35 II wireless headphones in pristine condition. Comes with original box and accessories."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Samsung Galaxy S21 Ultra",
        price: "900",
        description: "Samsung Galaxy S21 Ultra 5G with 12GB RAM and 256GB storage. Brand new and sealed in box."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Macbook Pro 16 inch",
        price: "1,500",
        description: "Macbook Pro 16 inch with 16GB RAM and 512GB storage. Like new condition with no scratches or dents."
    },
    {
        image_src: "https://picsum.photos/id/233/600/400",
        title: "Bose QuietComfort 35 II",
        price: "350",
        description: "Bose QuietComfort 35 II wireless headphones in pristine condition. Comes with original box and accessories."
    }
];

// Function to create ad cards dynamically
const createAdCards = (ads) => {
    const adCardsContainer = document.getElementById("ad-cards-container");
    ads.forEach(ad => {
        const adBody = document.createElement("div");
        adBody.classList.add("card-body");
        adBody.innerHTML = `
            <h2 class="price"><i class="fa-solid fa-indian-rupee-sign"></i> ${ad.price}</h2>
            <h4 class="card-title">${ad.title}</h4>
            <p class="card-text">${ad.description}</p>
            <button onclick="getAdDetails('${ad.title}')">View Ad</button>
        `;

        const adCard = document.createElement("div");
        adCard.classList.add("card");
        adCard.classList.add("m-2");
        adCard.setAttribute("style", "width: 23%; min-width: 210px;");
        adCard.innerHTML = `<img class="card-img-top" src=${ad.image_src} alt="Card image" style="width:100%">`;
        adCard.appendChild(adBody);
        adCardsContainer.appendChild(adCard);
    });
};

function getAdDetails(title) {
    location.assign(location.href + `${"ad/"+title}`)
}


// Call createAdCards function to create ad cards on page load
createAdCards(ads);