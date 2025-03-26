document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("MyForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        let radius = parseFloat(document.getElementById("radius").value);

        if (isNaN(radius) || radius <= 0) {
            alert("Veuillez entrer un rayon valide.");
            return;
        }

        let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById("volume").value = volume.toFixed(2); 
    });
});
