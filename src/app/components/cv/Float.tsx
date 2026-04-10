import { useState } from "react";
import { useTranslation } from "react-i18next";
import { File } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function FloatingCVButton() {
     const [loading, setLoading] = useState(false);
     const { i18n } = useTranslation();

     const handleDownload = (cvLink: string, cvDownload: string) => {
          setLoading(true);

          // Attendre 3 secondes avant de lancer le téléchargement
          setTimeout(() => {
               setLoading(false);
               const link = document.createElement("a");
               link.href = cvLink;
               link.download = cvDownload;
               link.click();
          }, 1500);
     };

     return (
          <>
               <div className="fixed left-0 top-1/5 transform -translate-y-1/5 z-50">
                    {i18n.language === "fr" ? (
                         <button
                              onClick={() =>
                                   handleDownload("files/CVs/CV-Desire-2026-FR.pdf", "CV_RABEMANANTSOA.pdf")
                              }
                              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-r-lg shadow-lg hover:bg-blue-800 transition cursor-pointer"
                         >
                              Télécharger Mon CV <File/>
                         </button>
                    ) : (
                         <button
                              onClick={() =>
                                   handleDownload("files/CVs/RESUME-Desire-2026-EN.pdf", "RESUME_RABEMANANTSOA.pdf")
                              }
                              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-r-lg shadow-lg hover:bg-blue-800 transition cursor-pointer"
                         >
                              Download My Resume <File/>
                         </button>
                    )}
               </div>

               {/* Popup transparent avec loader */}
               {loading && (
                    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
                         <ImageWithFallback
                              src="images/loader.gif"
                              alt="Chargement..."
                              className="w-25 h-25"
                         />
                    </div>
               )}
          </>
     );
}
