document.getElementById("startBtn").addEventListener("click", function() {
    let button = this;
    button.style.display = "none";  // Oculta el botón

    let flowerContainer = document.getElementById("flowerContainer");
    flowerContainer.style.opacity = "1";
    flowerContainer.style.transform = "scale(1)";

    let music = document.getElementById("bgMusic");
    music.play();  // Inicia la música

    // Generar flores dinámicamente
    for (let i = 0; i < 10; i++) {
        let flower = document.createElement("div");
        flower.classList.add("flower");
        flowerContainer.appendChild(flower);
    }

    // Mostrar la historia después de 5 segundos
    setTimeout(() => {
        document.getElementById("story").classList.remove("hidden");
        document.getElementById("story").style.opacity = "1";
    }, 5000);
});


    






