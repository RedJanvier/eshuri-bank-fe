import links from "../data/links.js";
import updateActiveLink from "./updateActiveLink.js";

export default function loadSideBar() {
    const sideBarContainer = document.getElementById("side-bar-container");
    if (sideBarContainer) {
        if (sideBarContainer) {
            const nav = document.createElement("nav");
            nav.classList.add("nav");

            links.forEach(link => {
                const anchor = document.createElement("a");
                anchor.href = link.url;
                anchor.classList.add("nav-link");

                if(window.location.pathname === link.url) {
                    anchor.classList.add("active");
                }

                const img = document.createElement("img");
                img.src = link.icon;
                img.alt = `${link.title} icon`;

                const span = document.createElement("span");
                span.textContent = link.title;

                anchor.appendChild(img);
                anchor.appendChild(span);
                nav.appendChild(anchor);

            });
            sideBarContainer.appendChild(nav);
            updateActiveLink();
        }
    }
}