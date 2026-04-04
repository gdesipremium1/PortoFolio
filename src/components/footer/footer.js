import { HTML_Builder } from "../HTML/builder";

/** *********************
 * 
 * @Page = Footer
 * @section = copyright
 * @side = Center
 */
const footer = {
    copyright: {
        tagName: "p",
        childHTML: `Tous droits réservés à Fetraniaina Désiré RABEMANANTSOA`,
        tailwindClass: "text-2xl fon-sans font-bold tracking-tight text-[#b2301f] my-3",
        attr: {
        }
    },
    BUTTON: {
        tagName: "button",
        textContent: "Contact Me",
        tailwindClass: "px-4 py-2 bg-[#35205f] text-white rounded  cursor-pointer",
        attr: {
            type: "button",
            onclick:"alert('See You Soon');"
        }
    },
};

const footerContact = new HTML_Builder(footer.BUTTON);
footerContact.appendTo("footer-copyright");
const footerCopyright = new HTML_Builder(footer.copyright);
footerCopyright.appendTo("footer-copyright");