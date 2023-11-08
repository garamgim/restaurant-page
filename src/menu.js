
export default function () {
    const contentPage = document.createElement("div");
    contentPage.className = "content-page";
    contentPage.id = "content-page-menu"

    const header = document.createElement("p");
    header.id = "menu-header"
    header.innerHTML = "MENU";

    const cake = createMenu("./img/cake.png", "Alien Cake", "Martian green flours, spicy moon lemons, chocolates, <br>and bear milk.", "799.00");
    const macaron = createMenu("./img/macaron.jpeg", "Marsberry Macarons", "5pcs, Special macarons with Marsberry buttercream.", "30.90");
    const pudding = createMenu("./img/pudding.jpg", "Space Pudding", "Banana pudding with a spoon of coconut cream <br>from Rings of Saturn.", "70000.00");
    const coffee = createMenu("./img/coffee.jpg", "Martian Coffee", "Traditional Martian coffee with bear milk butter.", "15.70");
    const juice = createMenu("./img/juice.jpg", "Alien Juice", "Bringing youth and happiness back to your life.", "7.77");


    contentPage.appendChild(header);
    contentPage.appendChild(cake);
    contentPage.appendChild(macaron);
    contentPage.appendChild(pudding);
    contentPage.appendChild(coffee);
    contentPage.appendChild(juice);

    return contentPage;
}

function createMenu(imgUrl, menuName, menuDescr, priceStr) {
    const container = document.createElement("div");
    container.className = "menu-div";

    const sentences = document.createElement("div");
    sentences.className = "menu-sentence-div"

    const img = new Image();
    img.src = imgUrl;
    img.classList = "menu-img";

    const name = document.createElement("p");
    name.innerHTML = menuName;
    name.classList = "menu-name";

    const description = document.createElement("p");
    description.innerHTML = menuDescr;
    description.classList = "menu-description";

    const price = document.createElement("p");
    price.innerHTML = "$ " + priceStr;
    price.classList = "menu-price";

    sentences.appendChild(name);
    sentences.appendChild(description);
    sentences.appendChild(price);

    container.appendChild(img);
    container.appendChild(sentences);

    return container
}