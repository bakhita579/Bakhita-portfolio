const skills = ["HTML", "CSS", "JavaScript"];
const list = document.getElementById("My Skills");
for (const skill of skills) {
    const item = document.createElement("li");
    item.textContent = skill;
    list.appendChild(item);
    
}
