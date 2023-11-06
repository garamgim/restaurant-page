import loadHome from "./home";
import loadMenu from "./menu";

const createHeader = () => {
    const header = document.createElement("header");
    return header;
}

const createMain = () => {
    const main = document.createElement("main");
    main.appendChild(loadMenu())
    return main;
}

const initializer = () => {
    document.body.appendChild(createHeader());
    document.body.appendChild(createMain());
}

export { initializer }; 