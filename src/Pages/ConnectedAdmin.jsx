/* page 6 de la maquette */

import React from 'react';

function connectedAdmin(){
    return(
        <div className="w-full pl-60 pr-60">
        <div className = "grid grid-cols-3 gap-4 justify-self-center">
            <div className = "mt-20 col-span-2" >
                 <h2 className="font-bold">Espace administration</h2>
                 <div className = "mt-10 p-1 text-center grid grid-cols-4 gap-1 shadow-md text-violet-700">
                    <p>Nom article</p>
                    <p>Prix</p>
                    <p>Statut</p>
                    <p>Action</p>
                 </div>
                 <div className = "mt-1 p-1 text-center grid grid-cols-4 gap-1 shadow-md">
                    <p>Chaise d'écolier</p>
                    <p>35</p>
                    <p>En ligne</p>
                    <div className="flex flex-row justify-evenly " >
                        <button type='submit' className= "w-8 h-8 bg-violet-400 rounded-full hover:bg-violet-700 focus:outline-none">📝</button>  
                        <button type='submit' className= "w-8 h-8 bg-violet-400 rounded-full hover:bg-violet-700 focus:outline-none">❌</button>  
                    </div>
                 </div>

            </div>
            <div className="mt-20 flex flex-col shadow-md justify-center">
                <h2 className="font-bold mb-6 text-center">Ajouter un article</h2>
                <form className = "ml-6">
                    <div className="m-4 ">
                        <input  placeholder="nom" required type="text" id="nomArticle" className="w-full bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" />
                    </div>
                    <div className="m-4 grid grid-cols-3 gap-1">
                        <input type="text" id="longueur" placeholder="longueur" required className="mr-1 bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700"  />
                        <input type="text" id="largeur" placeholder="largeur" required className="mr-1 bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700"  />
                        <input type="text" id="hauteur" placeholder="hauteur" required className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" />
                    </div>
                    <div className="m-4">
                        <input  placeholder="catégorie" required type="text" id="categorie" className="w-full bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" />
                    </div>
                    <div className="m-4">
                        <input  placeholder="matériau" required type="text" id="materiau" className=" w-full bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" />
                    </div>
                    <div className="m-4">
                        <input  placeholder="matériau" type="text" id="materiau2" className=" w-full bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" />
                    </div>
                    <div className="m-4 flex flex-col justify-between">
                        <label>Sélectionnez au moins un couleur</label>
                        <div className="flex flex-row justify-between">
                            <button className="bg-red-900 h-12 w-12 m-2" value="bordeau" ></button>
                            <button className="bg-red-500 h-12 w-12 m-2" value="rouge" ></button>
                            <button className="bg-orange-500 h-12 w-12 m-2" value="orange" ></button>
                            <button className="bg-yellow-500 h-12 w-12 m-2" value="jaune" ></button>
                            <button className="bg-green-500 h-12 w-12 m-2" value="vert" ></button>
                            <button className="bg-emerald-800 h-12 w-12 m-2" value="vert foncé" ></button>
                            <button className="bg-cyan-500 h-12 w-12 m-2" value="bleu" ></button>
                            <button className="bg-blue-800 h-12 w-12 m-2" value="bleu foncé" ></button>                
                        </div>
                        <div className="flex flex-row justify-between">
                            <button className="bg-purple-900 h-12 w-12 m-2" value="violet" ></button>
                            <button className="bg-pink-500 h-12 w-12 m-2" value="rose" ></button>
                            <button className="bg-rose-300 h-12 w-12 m-2" value="rose clair" ></button>
                            <button className="bg-orange-100 h-12 w-12 m-2" value="beige" ></button>
                            <button className="bg-yellow-900 h-12 w-12 m-2" value="marron" ></button>
                            <button className="bg-white h-12 w-12 m-2 border-2 border-gray-400" value="blanc" ></button>
                            <button className="bg-gray-400 h-12 w-12 m-2" value="gris" ></button>
                            <button className="bg-black h-12 w-12 m-2" value="noir" ></button>                
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button type="submit" className=" shadow-md mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Ajouter article</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
};

export default connectedAdmin;