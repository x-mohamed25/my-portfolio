document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".navbar li");

    links.forEach((li) => {
        li.addEventListener("click", () => {

            const page = li.dataset.target;

            if (page) {
                window.location.href = page + ".html";
            }

        });
    });

    // ICONS
    const icons = document.querySelectorAll(".icons img");

    if (icons[0]) {
        icons[0].addEventListener("click", () => {
            window.open("https://www.facebook.com/share/1DZMLjZnM6/?mibextid=wwXIfr", "_blank");
        });
    }

    if (icons[1]) {
        icons[1].addEventListener("click", () => {
            window.open("https://www.instagram.com/_mohamed_ashrf_1?igsh=bnY2bWFpZm80eDdr&utm_source=qr", "_blank");
        });
    }

    if (icons[2]) {
        icons[2].addEventListener("click", () => {
            window.open("https://linkedin.com", "_blank");
        });
    }

});





document.getElementById("viewProjects").addEventListener("click", () => {
    window.location.href = "projects.html";
});