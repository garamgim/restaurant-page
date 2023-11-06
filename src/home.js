export default function () {

    const contentPage = document.createElement("div");
    contentPage.className = "content-page"

    const title = document.createElement("p");
    title.id = "title"
    title.innerHTML = "MARS CAFE";
    contentPage.appendChild(title);

    const introduction = document.createElement("p");
    introduction.id = "introduction"
    introduction.innerHTML = "Earth's Best Martian Dessert";
    contentPage.appendChild(introduction);

    const mars = new Image();
    mars.id = "mars-img"
    mars.src = "./img/mars.png";
    contentPage.appendChild(mars);

    return contentPage;

}
