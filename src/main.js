import loadSideBar from "./utils/loadSideBar.js";
import updateActiveLink from "./utils/updateActiveLink.js";
import loadPageContent from "./utils/loadPageContent.js";

document.addEventListener("DOMContentLoaded", () => {
    loadSideBar();
    loadPageContent(window.location.pathname);

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const newPath = e.currentTarget.getAttribute('href');
            window.history.pushState({}, "", newPath);
            loadPageContent(newPath);
            updateActiveLink();
        })
    })

    window.addEventListener("popstate", () => {
        loadPageContent(window.location.pathname);
    });

});