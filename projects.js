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

function createProjectsCards(projects, containerSelector) {
    const container = document.querySelector(containerSelector);

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${project.img}" alt="${project.title}">
            <div class="card-content">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-desc">${project.desc}</p>
            </div>
        `;

        container.appendChild(card);
    });
}




const projects = [
    {
        title: "library",
        desc: "Library Management System built using C++ to manage books",
        img: "Icon/OIP.webp"
    },
    {
        title: "Cancer Detection",
        desc: "Machine learning model for cancer detection that analyzes medical data",
        img: "Icon/OIP (1).webp"
    },
    {
        title: "House Price Prediction",
        desc: "Predicts real estate prices based on features like location and size",
        img: "Icon/OIP (2).webp"
    },
    {
        title: "Restaurant menu web page",
        desc: "Interactive restaurant menu website using HTML, CSS, JS",
        img: "Icon/OIP (3).webp"
    },
    {
        title: "Offensive Text Detection",
        desc: "NLP system that detects toxic or offensive language",
        img: "Icon/OIP (5).webp"
    },
    {
        title: "MBM - Management System",
        desc: "Management system built with HTML, CSS, JavaScript",
        img: "Icon/OIP (6).webp"
    },
    {
        title: "Student Management System",
        desc: "OOP-based system for managing students, grades, and records",
        img: "Icon/OIP (7).webp"
    }
];

createProjectsCards(projects, ".projects-container");



document.getElementById("viewProjects").addEventListener("click", () => {
    window.location.href = "projects.html";
});