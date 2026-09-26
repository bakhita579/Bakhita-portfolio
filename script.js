const skills = ["HTML", "CSS", "JavaScript"];
const skillsList = document.getElementById("My Skills");

if (skillsList) {
    for (const skill of skills) {
        const item = document.createElement("li");
        item.textContent = skill;
        skillsList.appendChild(item);
    }
}

const projects = [
    {
        title: "Weather Dashboard",
        description: "Realtime weather app that fetches live forecast using external APIs",
        tech: "JavaScript, CSS, API"
    },
    {
        title: "Coffee Landing Page",
        description: "Responsive marketing page featuring smooth scrolling and mobile navigation",
        tech: "HTML, CSS, Flexbox"
    }
];

const projectsList = document.getElementById("project-wrapper");

if (projectsList) {
    for (const project of projects) {
        const card = document.createElement("div");
        card.className = "card";
        const titleEL = document.createElement("h3");
        titleEL.textContent = project.title;
        const descEL = document.createElement("p");
        descEL.textContent = project.description;
        const techEL = document.createElement("span");
        techEL.className = "tag";
        techEL.textContent = project.take
        item.textContent = `${project.title}: ${project.description} (${project.tech})`;
        card.appendChild(titleEL);
        card.appendChild(descEL);
        card.appendChild(techEL);

        projectsList.appendChild(card);

    }
}
