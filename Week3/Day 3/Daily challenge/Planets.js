
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "yellow", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];


const section = document.querySelector(".listPlanets");


planets.forEach(planet => {

    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
    

    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.className = "moon";
        
        const angle = (i / planet.moons) * 2 * Math.PI;
        const distance = 60; 
        const x = distance * Math.cos(angle);
        const y = distance * Math.sin(angle);
        moonDiv.style.left = `${x}px`;
        moonDiv.style.top = `${y}px`;

        planetDiv.appendChild(moonDiv);
    }
    
    section.appendChild(planetDiv);
});