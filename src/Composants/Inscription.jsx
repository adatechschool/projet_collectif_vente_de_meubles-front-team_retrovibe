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
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)} className = "">
        <h1 className="text-center mb-8">Pas encore client.e ?</h1>
        <div className="flex flex-col justify-center text-sm space-y-2 w-full ">
            <div className="flex w-full space-x-2">
                  <input defaultValue="" size="20" {...register("InputNom")}type="text" id="IputNom" className=" w-full bg-slate-100 border-2 border-violet-400 text-gray-900 rounded-lg focus:outline-none block p-2 hover:border-violet-700" placeholder="nom" required />
                  <input defaultValue="" size="20" {...register("InputPrenom")}type="text" id="InputPrenom" className="w-full bg-slate-100 border-2 border-violet-400 text-gray-900 rounded-lg focus:outline-none block p-2 hover:border-violet-700" placeholder="prénom" required />
            </div>
            <input defaultValue="" size="50" {...register("InputEmail")}type="email" id="InputEmail" className="focus:outline-none p-3 bg-slate-100 border-2 border-violet-400 text-gray-900 rounded-lg hover:border-violet-700" placeholder="email" required />
            <input defaultValue="" size="50" {...register("InputMotdePasse")}type="password" id="InputMotdePasse" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5  pr-42 hover:border-violet-700" placeholder="mot de passe" required />
            <button type="submit" className="w-1/2 text-white bg-violet-400 hover:bg-violet-700  self-center focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Créer mon compte</button>
        </div>
      </form>
    </div>
    );

}

export default Inscription