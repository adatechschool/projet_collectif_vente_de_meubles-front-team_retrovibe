/* page 4 de la maquette */

import React from 'react';

function Connexion() {
  return (
    <div className = "flex justify-center mt-32">
      <form className = "mr-16 text-center">
        <h1 className="mt-6 mb-6 text-center">Déjà client.e ?</h1>
        <div className="mb-6 flex flex-row">
          <div>
            <div className="mb-6">
              <input type="email" id="email" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 pr-52 hover:border-violet-700" placeholder="email" required />
            </div>
            <div className="mb-6">
              <input type="password" id="password" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5  pr-52 hover:border-violet-700" placeholder="mot de passe" required />
            </div>
            <button type="submit" className="mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Me connecter</button>
          </div>  
        </div>
      </form>

      <div className= "content-none w-0.5 bg-violet-400 inset-y-0 ">

      </div>

      <form className = "ml-16 text-center">
        <h1 className="mt-6 mb-6 text-center">Pas encore client.e ?</h1>
            <div className="mb-6 flex flex-row">
              <div className="mr-4">
                  <input type="text" id="nom" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" placeholder="nom" required />
              </div>
              <div>
                  <input type="text" id="prenom" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" placeholder="prénom" required />
              </div>
            </div>
            <div className="mb-6">
                <input type="email" id="email" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 pr-52 hover:border-violet-700" placeholder="email" required />
            </div>
            <div className="mb-6">
                <input type="password" id="password" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5  pr-52 hover:border-violet-700" placeholder="mot de passe" required />
            </div>
            <button type="submit" className="mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Créer mon compte</button>
      </form>
    </div>
  )
};
export default Connexion;