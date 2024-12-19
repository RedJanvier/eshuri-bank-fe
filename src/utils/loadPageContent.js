import Dashboard from "../components/Dashboard.js";
import ApplyForCard from "../components/ApplyForCard.js";

export default function loadPageContent(path) {
    const mainWrapper = document.getElementById("main-wrapper");
    mainWrapper.innerHTML = ""
    console.log("content changed");
    let pageContent;
    switch (path) {
        case "/dashboard":
            pageContent = Dashboard();
            break;
        case "/apply-card":
            pageContent = ApplyForCard();
            break;
        default:
            pageContent = document.createElement('h1');
            pageContent.textContent = "404 Not Found";
    }
    mainWrapper.innerHTML = "";
    mainWrapper.appendChild(pageContent);
}