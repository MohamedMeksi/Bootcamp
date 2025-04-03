const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    const suffix = ordinal[(index + 1) % 10] || ordinal[0];
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});