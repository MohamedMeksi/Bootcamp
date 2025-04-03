const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach(color => {
    console.log(`${colors.indexOf(color) + 1}# choice is ${color}.`);
});

if (colors.some(color => color === "Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}