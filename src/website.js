import loadHome from "./home";

const createHeader = () => {
    const header = document.createElement("header");
    return header;
}

const createMain = () => {
    const main = document.createElement("main");
    main.appendChild(loadHome())
    return main;
}

const initializer = () => {
    document.body.appendChild(createHeader());
    document.body.appendChild(createMain());
}

export { initializer }; 