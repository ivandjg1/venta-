document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");

    const navbarLinks = document.querySelectorAll(".navbar a");
    navbarLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "white";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "silver";
        });
    });
});
