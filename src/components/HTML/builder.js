/**
 * example data
 const headerProfileDatas = {
    imageProfile: {
        tagName: "img",
        textContent: un,
        tailwindClass: "rounded-r-full size-[12vw]",
        attr: {
            id: NaN,
            src: "src/assets/images/profile.png",
            alt: "WordPress & WooCommerc, JS & Python developer",
            href:
        }
    },
};

 */
export class HTML_Builder {
    #htmlData = new Map();
    #currentHTML;
    constructor(datas) {
        this.#htmlData.set("datHTML", datas);
        this.#buildNow();
    }
    #buildNow() {
        if (
            this.#htmlData.get("datHTML").tagName !== undefined &&
            typeof (this.#htmlData.get("datHTML").tagName) !== String &&
            typeof (this.#htmlData.get("datHTML").tagName) !== ""
        ) {
            const HTML = document.createElement(this.#htmlData.get("datHTML").tagName);
            (this.#htmlData.get("datHTML").textContent !== undefined) ? HTML.textContent = this.#htmlData.get("datHTML").textContent : null;
            (this.#htmlData.get("datHTML").tailwindClass !== undefined) ? HTML.className = this.#htmlData.get("datHTML").tailwindClass : null;
            (this.#htmlData.get("datHTML").childHTML !== undefined) ? HTML.innerHTML  += this.#htmlData.get("datHTML").childHTML : null;
            if (this.#htmlData.get("datHTML").attr !== undefined) {
                Object.entries(this.#htmlData.get("datHTML").attr).forEach(([key,value])=>{
                    HTML.setAttribute(key, value);
                });
            }

            this.#currentHTML = HTML;
            console.log(this.#currentHTML);
        } else {
            console.error("The parameters 'tagName' must be given example: {tagName : 'div'}");
        }
    }
    appendTo(htmlId) {
        const parentHTML = document.getElementById(htmlId);
        parentHTML.appendChild(this.#currentHTML);
    }
}
