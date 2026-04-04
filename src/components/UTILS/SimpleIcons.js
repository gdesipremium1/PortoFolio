import * as icons from "simple-icons";

function countIcons(listeIcons) {
    let i = 0;
    listeIcons.forEach(icon => {
        i++;
    });
    return i;
}


const selectedIcons = [
    //Header
    icons.siWordpress,
    icons.siWoocommerce,
    icons.siTailwindcss,
    icons.siJavascript,
    icons.siPython,
];

// Fonction pour créer un élément SVG
function createIcon(icon, size) {
    const nsSvg = "http://www.w3.org/2000/svg";
    const svgViewBox = "0 0 24 24";


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

/**
 * Header ICONS
 */
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const sizeHeader = Math.min(screenWidth * 0.1, screenHeight * 0.1);
const grid = document.getElementById("header-icons");
selectedIcons.forEach(icon => {
    grid.appendChild(createIcon(icon, sizeHeader));
});


/**
 * Footer ICONS
 */
const footerIcons = [
    icons.siFacebook,
    icons.siMailbox,
    icons.siLinphone,
    icons.siMailbox,
    icons.siLinphone
];
//Ijecter le second div
const socialHTML = document.createElement('div');
socialHTML.className = `grid grid-cols-${countIcons(footerIcons)}`;
const sizeFooterCopyright = Math.min(screenWidth * 0.1, screenHeight * 0.1);
footerIcons.forEach(icon => {
    socialHTML.append(createIcon(icon, sizeFooterCopyright));
});

const footerParentHTML = document.getElementById("footer");
footerParentHTML.prepend(socialHTML);