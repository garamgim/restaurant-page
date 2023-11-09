export default function () {

    const contentPage = document.createElement("div");
    contentPage.className = "content-page";

    const contactUs = document.createElement("p");
    contactUs.id = "contact-us";
    contactUs.innerHTML = "Contact Us";
    contentPage.appendChild(contactUs);

    const telephone = document.createElement("p");
    telephone.innerHTML = "&nbsp; &#128222; (070) 777-7777-7777";

    const address = document.createElement("p");
    address.innerHTML = "&nbsp; &#128205; 952, Taiwan, Taitung County, Lanyu Township"

    const map = new Image();
    map.src = "./img/map.png";
    map.id = "map"

    const profileDiv = document.createElement("div");
    profileDiv.id = "profile-div";
    profileDiv.append(telephone);
    profileDiv.append(address);
    profileDiv.append(map);

    contentPage.append(profileDiv);

    return contentPage;
}