import React from 'react';

function Connexion() {
  return (
    <div class = "flex flex-row justify-center">
      <form class = "mr-6">
        <h1 class="mt-6 mb-6 text-center">Déjà client.e ?</h1>
        <div class="mb-6 flex flex-row">
          <div>
            <div class="mb-6">
              <input type="email" id="email" class="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 pr-52 hover:border-violet-700" placeholder="email" required />
            </div>
            <div class="mb-6">
              <input type="password" id="password" class="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5  pr-52 hover:border-violet-700" placeholder="mot de passe" required />
            </div>
            <button type="submit" class="mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Me connecter</button>
          </div>  
        </div>
      </form>

      <div class= "content-none w-0.5 bg-violet-400 inset-y-0 ">

      </div>

      <form class = "ml-6">
        <h1 class="mt-6 mb-6 text-center">Pas encore client.e ?</h1>
            <div class="mb-6 flex flex-row">
              <div class="mr-4">
                  <input type="nom" id="nom" class="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" placeholder="nom" required />
              </div>
              <div>
                  <input type="prénom" id="prénom" class="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" placeholder="prénom" required />
              </div>
            </div>
            <div class="mb-6">
                <input type="email" id="email" class="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 pr-52 hover:border-violet-700" placeholder="email" required />
            </div>
            <div class="mb-6">
                <input type="password" id="password" class="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5  pr-52 hover:border-violet-700" placeholder="mot de passe" required />
            </div>
            <button type="submit" class="mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Créer mon compte</button>
      </form>
    </div>
  )
};
export default Connexion;