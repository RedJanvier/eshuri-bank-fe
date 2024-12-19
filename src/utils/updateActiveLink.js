export default function updateActiveLink() {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
    });
    const currentPath = window.location.pathname;
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.href === window.location.origin + currentPath) {
            link.classList.add("active");
        }
    });
}