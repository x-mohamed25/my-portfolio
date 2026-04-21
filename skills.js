document.addEventListener("DOMContentLoaded", () => {

    // NAVBAR
    const links = document.querySelectorAll(".navbar li");

    links.forEach((li) => {
        li.addEventListener("click", () => {

            const page = li.dataset.target;

            if (page) {
                window.location.href = page + ".html";
            }

        });
    });

    // VIEW PROJECT BUTTON (safe check)
    const viewBtn = document.getElementById("viewProjects");
    if (viewBtn) {
        viewBtn.addEventListener("click", () => {
            window.location.href = "projects.html";
        });
    }

    // SKILLS FUNCTION
    function createSkills(skills, containerSelector) {
        const container = document.querySelector(containerSelector);

        if (!container) {
            console.log("skills container not found");
            return;
        }

        skills.forEach(skill => {
            const card = document.createElement("div");
            card.classList.add("skill-card");

            card.innerHTML = `
                <img src="${skill.img}">
                <h3>${skill.name}</h3>
            `;

            container.appendChild(card);
        });
    }

const skills = [
    { name: "OOP", img: "Icon/inheritance.png" },
    { name: "JavaScript", img: "Icon/java-script.png" },
    { name: "Python", img: "Icon/python.png" },
    { name: "NLP", img: "Icon/nlp.png" },
    { name: "Machine Learning", img: "Icon/machine-learning.png" },
    { name: "C++", img: "Icon/c-.png" },
    { name: "HTML", img: "Icon/html.png" },
    { name: "CSS", img: "Icon/css-3.png" },
    { name: "Programmer", img: "Icon/programmer.png" },
    { name: "NLP 2", img: "Icon/nlp (1).png" },
    { name: "MySQL", img: "Icon/mysql.png" },
    { name: "Java", img: "Icon/java.png" }
];

    createSkills(skills, ".skills-container");

});