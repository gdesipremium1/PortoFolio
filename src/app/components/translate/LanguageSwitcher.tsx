import i18n from "../../../i18n";

export default function LanguageSwitcher() {
       return (
              <>
                     <button onClick={() => i18n.changeLanguage("fr")}>
                            <img
                                   src="images/flags/fr.png"
                                   alt="Français"
                                   className="w-8 h-8 rounded-full cursor-pointer"
                            />
                     </button>
                     <button onClick={() => i18n.changeLanguage("en")}>
                            <img
                                   src="images/flags/en.png"
                                   alt="English"
                                   className="w-8 h-8 rounded-full cursor-pointer"
                            />
                     </button>
              </>
       );
}
