import { HTML_Builder } from "../HTML/builder";

/** *********************
 * 
 * @Page = Home
 * @section = Small Header
 * @side = Center
 */
const homeContentSmallHeader = {
    H2: {
        tagName: "h2",
        tailwindClass: "text-2xl fon-sans font-bold tracking-tight text-[#b2301f] my-3",
        childHTML: `Wordpress & Woocommerce, JavaScript &
      Python
      developer with strong building IT Solution with :`,
        attr: {
        }
    },
};
const SMALL_HEADER = new HTML_Builder(homeContentSmallHeader.H2);
SMALL_HEADER.appendTo("small-header");


/** *********************
 * 
 * @Page = Home
 * @section = 1
 * @side = Left
 */
const homeContent1Left = {
    IMG: {
        tagName: "img",
        tailwindClass: "text-[70px] fon-sans font-bold tracking-tight text-[#b2301f] my-3",
        attr: {
            src: "images/svg/about_me_banner_800x800.svg",
            alt: "Présentation",
        }
    },
};
const IMG_LEFT = new HTML_Builder(homeContent1Left.IMG);
IMG_LEFT.appendTo("home-section-1-left");


/** *********************
 * 
 * @Page = Home
 * @section = 1
 * @side = Right
 */
const homeContent1Right = {
    H2: {
        tagName: "h2",
        textContent: "Je me présente",
        tailwindClass: "text-[70px] fon-sans font-bold tracking-tight text-[#b2301f] my-3",
        attr: {
        }
    },
    P: {
        tagName: "h1",
        childHTML: `<strong class="tet-[#35205f]">Développeur Full Stack & WordPress — WordPress, WooCommerce, Tailwind, Firebase & GitHub au service de
          vos projets.</strong><br>
        Mon environnement de travail — Vite, Tailwind CSS, ES6, Firebase et GitHub — me permet de livrer des projets
        maintenables, optimisés pour les Core Web Vitals et versionnés avec soin. Je développe des thèmes WordPress sur
        mesure, des blocs Gutenberg, des plugins métier et des boutiques WooCommerce entièrement personnalisées.
        Intégration Figma to WordPress, migration de sites, optimisation de la vitesse de chargement, mise en place de
        passerelles de paiement (Stripe, PayPal) : chaque livrable est propre dans le code et solide dans les résultats.
        Disponible pour des missions freelance à distance, ponctuelles ou long terme.
        Mon environnement de travail — Vite, Tailwind CSS, ES6, Firebase et GitHub — me permet de livrer des projets
        maintenables, optimisés pour les Core Web Vitals et versionnés avec soin. Je développe des thèmes WordPress sur
        mesure, des blocs Gutenberg, des plugins métier et des boutiques WooCommerce entièrement personnalisées.
        Intégration Figma to WordPress, migration de sites, optimisation de la vitesse de chargement, mise en place de
        passerelles de paiement (Stripe, PayPal) : chaque livrable est propre dans le code et solide dans les résultats.
        Disponible pour des missions freelance à distance, ponctuelles ou long terme.`,
        tailwindClass: "tet-[black]",
        attr: {
        }
    },
    BUTTON: {
        tagName: "button",
        textContent: "Read more...",
        tailwindClass: "px-4 py-2 bg-[#35205f] text-white rounded  cursor-pointer",
        attr: {
            type: "button"
        }
    },
};
const H2 = new HTML_Builder(homeContent1Right.H2);
H2.appendTo("home-section-1-right");
const P = new HTML_Builder(homeContent1Right.P);
P.appendTo("home-section-1-right");
const BUTTON = new HTML_Builder(homeContent1Right.BUTTON);
BUTTON.appendTo("home-section-1-right");


/** *********************
 * 
 * @Page = Home
 * @section = 2
 * @side = Left
 */
const homeContent2Left = {
    H2: {
        tagName: "h2",
        textContent: "Vos avantages",
        tailwindClass: "text-[70px] fon-sans font-bold tracking-tight text-[#35205f] my-3",
        attr: {
        }
    },
    P: {
        tagName: "p",
        textContent: `Labore laborum anim tempor irure proident ut non aliqua deserunt proident ut adipisicing. Quis adipisicing
        nostrud reprehenderit voluptate commodo ullamco velit reprehenderit ullamco voluptate veniam incididunt commodo
        proident. Eiusmod ad voluptate sunt eiusmod incididunt nulla irure labore. Do laboris nisi tempor dolor do velit
        anim. Cillum pariatur amet ipsum exercitation sint. Minim magna dolor non cupidatat est minim culpa ut. Irure
        officia ipsum nisi minim consectetur anim sit do proident ut aliqua Lorem ea.
        Labore laborum anim tempor irure proident ut non aliqua deserunt proident ut adipisicing. Quis adipisicing
        nostrud reprehenderit voluptate commodo ullamco velit reprehenderit ullamco voluptate veniam incididunt commodo
        proident. Eiusmod ad voluptate sunt eiusmod incididunt nulla irure labore. Do laboris nisi tempor dolor do velit
        anim. Cillum pariatur amet ipsum exercitation sint. Minim magna dolor non cupidatat est minim culpa ut. Irure
        officia ipsum nisi minim consectetur anim sit do proident ut aliqua Lorem ea.`,
        tailwindClass: "tet-[black]",
        attr: {
        }
    },
    BUTTON: {
        tagName: "button",
        textContent: "Read more...",
        tailwindClass: "px-4 py-2 bg-[#35205f] text-white rounded cursor-pointer",
        attr: {
            type: "button"
        }
    },
};
const H2_2 = new HTML_Builder(homeContent2Left.H2);
H2_2.appendTo("home-section-2-left");
const P_2 = new HTML_Builder(homeContent2Left.P);
P_2.appendTo("home-section-2-left");
const BUTTON_2 = new HTML_Builder(homeContent2Left.BUTTON);
BUTTON_2.appendTo("home-section-2-left");


/** *********************
 * 
 * @Page = Home
 * @section = 2
 * @side = Right
 */
const homeContent2Right = {
    IMG: {
        tagName: "img",
        tailwindClass: "text-[70px] fon-sans font-bold tracking-tight text-[#b2301f] my-3",
        attr: {
            src: "images/advantage.png",
            alt: "Avantages",
        }
    },
};
const IMG_RIGHT_2 = new HTML_Builder(homeContent2Right.IMG);
IMG_RIGHT_2.appendTo("home-section-2-right");


/** *********************
 * 
 * @Page = Home
 * @section = 3
 * @side = Left
 */
const homeContent3Left = {
    IMG: {
        tagName: "img",
        tailwindClass: "text-[70px] fon-sans font-bold tracking-tight text-[#b2301f] my-3",
        attr: {
            src: "images/presentation.png",
            alt: "Présentation",
        }
    },
};
const IMG_LEFT_3 = new HTML_Builder(homeContent3Left.IMG);
IMG_LEFT_3.appendTo("home-section-3-left");


/** *********************
 * 
 * @Page = Home
 * @section = 3
 * @side = Right
 */
const homeContent3Right = {
    H2: {
        tagName: "h2",
        textContent: "Je me présente",
        tailwindClass: "text-[70px] fon-sans font-bold tracking-tight text-[#b2301f] my-3",
        attr: {
        }
    },
    P: {
        tagName: "h1",
        childHTML: `<strong class="tet-[#35205f]">Développeur Full Stack & WordPress — WordPress, WooCommerce, Tailwind, Firebase & GitHub au service de
          vos projets.</strong><br>
        Mon environnement de travail — Vite, Tailwind CSS, ES6, Firebase et GitHub — me permet de livrer des projets
        maintenables, optimisés pour les Core Web Vitals et versionnés avec soin. Je développe des thèmes WordPress sur
        mesure, des blocs Gutenberg, des plugins métier et des boutiques WooCommerce entièrement personnalisées.
        Intégration Figma to WordPress, migration de sites, optimisation de la vitesse de chargement, mise en place de
        passerelles de paiement (Stripe, PayPal) : chaque livrable est propre dans le code et solide dans les résultats.
        Disponible pour des missions freelance à distance, ponctuelles ou long terme.
        Mon environnement de travail — Vite, Tailwind CSS, ES6, Firebase et GitHub — me permet de livrer des projets
        maintenables, optimisés pour les Core Web Vitals et versionnés avec soin. Je développe des thèmes WordPress sur
        mesure, des blocs Gutenberg, des plugins métier et des boutiques WooCommerce entièrement personnalisées.
        Intégration Figma to WordPress, migration de sites, optimisation de la vitesse de chargement, mise en place de
        passerelles de paiement (Stripe, PayPal) : chaque livrable est propre dans le code et solide dans les résultats.
        Disponible pour des missions freelance à distance, ponctuelles ou long terme.`,
        tailwindClass: "tet-[black]",
        attr: {
        }
    },
    BUTTON: {
        tagName: "button",
        textContent: "Read more...",
        tailwindClass: "px-4 py-2 bg-[#35205f] text-white rounded  cursor-pointer",
        attr: {
            type: "button"
        }
    },
};
const H2_3 = new HTML_Builder(homeContent3Right.H2);
H2_3.appendTo("home-section-3-right");
const P_3 = new HTML_Builder(homeContent3Right.P);
P_3.appendTo("home-section-3-right");
const BUTTON_3 = new HTML_Builder(homeContent3Right.BUTTON);
BUTTON_3.appendTo("home-section-3-right");