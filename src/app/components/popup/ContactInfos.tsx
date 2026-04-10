import { useState } from "react";
import { Smartphone, Mail } from 'lucide-react';

function ContactButton({ isHeroSection }: { isHeroSection?: boolean }) {
               const [showAlert, setShowAlert] = useState(false);
               return (
                              <>
                                             {
                                                            !isHeroSection && (

                                                                           <button
                                                                                          onClick={() => { setShowAlert(true) }}
                                                                                          type="button"
                                                                                          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition  cursor-pointer"
                                                                           >
                                                                                          <Smartphone size={20} />
                                                                                          Phone
                                                                           </button>
                                                            )
                                             }
                                             {
                                                            isHeroSection && (
                                                                           <button type="button" onClick={() => setShowAlert(true)} className="text-gray-600 hover:text-gray-900 transition cursor-pointer">
                                                                                          <Smartphone size={24} />
                                                                           </button>
                                                            )
                                             }
                                             {
                                                            showAlert && (
                                                                           <div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50">
                                                                                          <div className="bg-white rounded-lg shadow-lg p-6 w-100 relative">
                                                                                                         <button
                                                                                                                        onClick={() => setShowAlert(false)}
                                                                                                                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                                                                                         >
                                                                                                                        ✖
                                                                                                         </button>
                                                                                                         <h2 className="text-2lg font-semibold mb-4 text-center">Contacts</h2>
                                                                                                         <ul className="flex flex-col-reverse mt-4 text-blue-900 font-semibold gap-2">
                                                                                                                        <li className="inline-flex items-center justify-center gap-2">
                                                                                                                                       <Smartphone /> +261 33 29 92 692
                                                                                                                        </li>
                                                                                                                        <li className="inline-flex items-center justify-center gap-2">
                                                                                                                                       <Smartphone /> +261 34 71 043 38
                                                                                                                        </li>
                                                                                                                        <li className="inline-flex items-center justify-center gap-2">
                                                                                                                                       <Mail /> fetraniainadesirerabemanantsoa@gmail.com
                                                                                                                        </li>
                                                                                                         </ul>
                                                                                          </div>
                                                                           </div>
                                                            )
                                             }
                              </>
               );
}

export default ContactButton;
