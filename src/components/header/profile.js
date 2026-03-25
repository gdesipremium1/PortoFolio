import { HTML_Builder } from "../HTML/builder";

const headerProfileDatas = {
    imageProfile: {
        tagName: "img",
        textContent: undefined,
        tailwindClass: "rounded-r-full size-[12vw]",
        attr: {
            src: `${__ASSETS_PATH__}/images/profile.png`,
            alt: "WordPress & WooCommerc, JS & Python developer",
        }
    },
    nameProfile: {
        tagName: "div",
        childHTML: '<span class="text-xl font-semibold">Fetraniaina Désiré</span><br><span class="text-2xl font-bold">RABEMANANTSOA</span>',
        tailwindClass: "text-[#35205f]",
        attr: {
        }
    }
};

const ProfileHTML = new HTML_Builder(headerProfileDatas.imageProfile);
ProfileHTML.appendTo("header-profile");
const ProfileNameHTML = new HTML_Builder(headerProfileDatas.nameProfile);
ProfileNameHTML.appendTo("header-profile");