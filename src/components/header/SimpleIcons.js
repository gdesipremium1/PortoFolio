import * as icons from "simple-icons";

// Liste des icônes que tu veux afficher
const selectedIcons = [
    icons.siWordpress,
    icons.siWoocommerce,
    icons.siTailwindcss,
    icons.siJavascript,
    icons.siPython
];

// Fonction pour créer un élément SVG
function createIcon(icon) {
    const nsSvg = "http://www.w3.org/2000/svg";
    const svgViewBox = "0 0 24 24";

    //gestion des tails selon l'écran
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const size = Math.min(screenWidth * 0.1, screenHeight * 0.1);


    const svg = document.createElementNS(nsSvg, "svg");
    svg.setAttribute("viewBox", svgViewBox);
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("fill", `#${icon.hex}`);

    const path = document.createElementNS(nsSvg, "path");
    path.setAttribute("d", icon.path);

    svg.appendChild(path);

    const container = document.createElement("div");
    container.className = "flex flex-col items-center";
    container.appendChild(svg);

    // Ajouter un label sous l’icône si l'écran superieur à mobile
    if (screenWidth > 767) {
        const label = document.createElement("span");
        label.textContent = icon.title;
        label.className = "mt-2 text-lg text-[#35205f] ";
        container.appendChild(label);
    }

    return container;
}

// Injecter dans la grille
const grid = document.getElementById("header-icons");
selectedIcons.forEach(icon => {
    grid.appendChild(createIcon(icon));
});
