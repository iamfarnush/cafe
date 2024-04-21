let menu = [
    {
        smallImage: "./images/menu/icons8-sugar-free-100 1.png",
        Image: "./images/menu/sweet 1.png",
        title: "Chocolate donut stuffed with nuts",
        text: "If you like chocolate so much, then a donut is for you.",
        price: "Price: 2.30$",
    },
    {
        smallImage: "./images/menu/icons8-vegan-food-48 1.png",
        Image: "./images/menu/Vegan 1.png",
        title: "Vegan donut with strawberry",
        text: "Made of simple plant-based. He is soft, fluffy and healthy.",
        price: "Price: 3.50$",
    },
    {
        smallImage: "./images/menu/icons8-non-lactose-food-100 1.png",
        Image: "./images/menu/fish 1.png",
        title: "Fish donut with tuna and katsuobushi ",
        text: "Many people like fish. And in our cafe you can try it.",
        price: "Price: 1.75$",
    },
];
let getMenu = document.getElementById("allDonuts");
for(element of menu){
    let bigDiv = document.createElement('div');
    getMenu.appendChild(bigDiv);
    bigDiv.className = "bigDiv";

    let smallImageTag = document.createElement("img");
    bigDiv.appendChild(smallImageTag);
    smallImageTag.src = element.smallImage;
    smallImageTag.style.display = "flex"

    let ImageTag = document.createElement("img");
    bigDiv.appendChild(ImageTag);
    ImageTag.src = element.Image;
    ImageTag.style.width = "170px"

    let titleTag = document.createElement("h3");
    bigDiv.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.style.paddingBottom = "10px"
    titleTag.style.paddingTop = "10px"

    let textTag = document.createElement("p");
    bigDiv.appendChild(textTag);
    textTag.textContent = element.text; 

    let priceTag = document.createElement("h4");
    bigDiv.appendChild(priceTag);
    priceTag.textContent = element.price;
}