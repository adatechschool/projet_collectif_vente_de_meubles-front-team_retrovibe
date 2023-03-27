import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


function Inscription (){
    const { register, handleSubmit, watch, formState: { error } } = useForm();
    const onSubmit = data => axios.post("https://retrovibe.herokuapp.com/api/utilisateurs", {
        nom : data.InputNom,
        prenom : data.InputPrenom,
        email: data.InputEmail,
        mot_de_passe: data.InputMotdePasse  // Envoie d'une méthode post pour ajouter un utilisateur à la BDD pour s'inscrire 
    })
    .then(function (response){
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    return (
    <div className='m-auto md:m-0'>
      <form onSubmit={handleSubmit(onSubmit)} className = "md:ml-16 text-center">
        <h1 className="mt-6 mb-6 text-center">Pas encore client.e ?</h1>
            <div className="mb-6 flex flex-row justify-between">
              <div >
                  <input defaultValue="" size="20" {...register("InputNom")}type="text" id="IputNom" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" placeholder="nom" required />
              </div>
              <div>
                  <input defaultValue="" size="20" {...register("InputPrenom")}type="text" id="InputPrenom" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 hover:border-violet-700" placeholder="prénom" required />
              </div>
            </div> 
            <div className="mb-6 ml-1">
                <input defaultValue="" size="50" {...register("InputEmail")}type="email" id="InputEmail" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 pr-42 hover:border-violet-700" placeholder="email" required />
            </div>
            <div className="mb-6 ml-1">
                <input defaultValue="" size="50" {...register("InputMotdePasse")}type="password" id="InputMotdePasse" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5  pr-42 hover:border-violet-700" placeholder="mot de passe" required />
            </div>
            <button type="submit" className="mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Créer mon compte</button>
      </form>
    </div>
    );

}

export default Inscription