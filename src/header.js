import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const contentLoader = (() => {

    const header = document.createElement("header");
    header.id = "header"

    const main = document.createElement("main");
    main.append(loadHome());

    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    homeBtn.classList = "header-button";
    menuBtn.classList = "header-button";
    contactBtn.classList = "header-button";

    homeBtn.innerHTML = "HOME"
    menuBtn.innerHTML = "MENU"
    contactBtn.innerHTML = "CONTACT"

    homeBtn.addEventListener("click", () => {
        main.innerHTML = '';
        main.append(loadHome());
    });
    menuBtn.addEventListener("click", () => {
        main.innerHTML = '';
        main.append(loadMenu());
    });
    contactBtn.addEventListener("click", () => {
        main.innerHTML = '';
        main.append(loadContact());
    });

    header.append(homeBtn);
    header.append(menuBtn);
    header.append(contactBtn);

    return { header, main };

})();


const initializer = () => {
    document.body.appendChild(contentLoader.header);
    document.body.appendChild(contentLoader.main);
}

export { initializer }; 