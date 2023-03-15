/* page 6 de la maquette */

import React from 'react';

function connectedAdmin(){
    return(
        <div class = "flex flex-row justify-evenly">
            <div>
                 <p>Coté gestion article</p>
            </div>
            <div class="m-10 flex flex-col shadow-md justify-center">
                <h1 class=" mb-6 text-center">Ajouter un article</h1>
                <form class = "ml-6">
                    <div class="m-4 ">
                        <input  placeholder="nom" required type="text" id="nomArticle" class="w-full bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" />
                    </div>
                    <div class="m-4 flex flex-row">
                        <input type="text" id="longueur" placeholder="longueur" required class="mr-1 bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700"  />
                        <input type="text" id="largeur" placeholder="largeur" required class="mr-1 bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700"  />
                        <input type="text" id="hauteur" placeholder="hauteur" required class="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" />
                    </div>
                    <div class="m-4">
                        <input  placeholder="catégorie" required type="text" id="categorie" class="w-full bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" />
                    </div>
                    <div class="m-4">
                        <input  placeholder="matériau" required type="text" id="materiau" class=" w-full bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" />
                    </div>
                    <div class="m-4">
                        <input  placeholder="matériau" type="text" id="materiau2" class=" w-full bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" />
                    </div>
                    <div class="m-4 flex flex-col justify-between">
                        <label>Sélectionnez au moins un couleur</label>
                        <div class="flex flex-row justify-between">
                            <button class="bg-red-900 h-12 w-12 m-2" value="bordeau" ></button>
                            <button class="bg-red-500 h-12 w-12 m-2" value="rouge" ></button>
                            <button class="bg-orange-500 h-12 w-12 m-2" value="orange" ></button>
                            <button class="bg-yellow-500 h-12 w-12 m-2" value="jaune" ></button>
                            <button class="bg-green-500 h-12 w-12 m-2" value="vert" ></button>
                            <button class="bg-emerald-800 h-12 w-12 m-2" value="vert foncé" ></button>
                            <button class="bg-cyan-500 h-12 w-12 m-2" value="bleu" ></button>
                            <button class="bg-blue-800 h-12 w-12 m-2" value="bleu foncé" ></button>                
                        </div>
                        <div class="flex flex-row justify-between">
                            <button class="bg-purple-900 h-12 w-12 m-2" value="violet" ></button>
                            <button class="bg-pink-500 h-12 w-12 m-2" value="rose" ></button>
                            <button class="bg-rose-300 h-12 w-12 m-2" value="rose clair" ></button>
                            <button class="bg-orange-100 h-12 w-12 m-2" value="beige" ></button>
                            <button class="bg-yellow-900 h-12 w-12 m-2" value="marron" ></button>
                            <button class="bg-white h-12 w-12 m-2 border-2 border-gray-400" value="blanc" ></button>
                            <button class="bg-gray-400 h-12 w-12 m-2" value="gris" ></button>
                            <button class="bg-black h-12 w-12 m-2" value="noir" ></button>                
                        </div>
                    </div>
                    <div class="w-full flex justify-center">
                        <button type="submit" class=" mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Ajouter article</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default connectedAdmin;