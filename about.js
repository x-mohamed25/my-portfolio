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

    

});





document.getElementById("viewProjects").addEventListener("click", () => {
    window.location.href = "projects.html";
});