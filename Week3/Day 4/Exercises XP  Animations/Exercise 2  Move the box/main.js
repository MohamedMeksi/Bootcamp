function myMove() {
    const animate = document.getElementById("animate");
    const container = document.getElementById("container");
    let position = 0;

    const interval = setInterval(() => {
        if (position >= container.offsetWidth - animate.offsetWidth) {
            clearInterval(interval);
        } else {
            position++;
            animate.style.left = position + "px";
        }
    }, 1);
}
document.getElementById("startButton").addEventListener("click", myMove);