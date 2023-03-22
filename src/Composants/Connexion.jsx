import React from 'react';
import { useForm } from "react-hook-form";
import Auth from './Auth';
import axios from 'axios';

function Connexion (){

    const { register, handleSubmit, watch, formState: { error } } = useForm();
    const onSubmit = data => axios.post("https://cors-anywhere.herokuapp.com/https://retrovibe.herokuapp.com/api/utilisateurs", {
      email : data.email,
      mot_de_passe : data.mot_de_passe
    })
    .then(function (response){
      console.log(response.data)
     /*  for (let i=0; i<response.data.length; i++){
        if (response.data[i].email === data.email){
          console.log("le mail marche")
          if (response.data[i].mot_de_passe === data.mot_de_passe){
            console.log("log in accepté")
          }
          else {console.log("Mot de passe incorrect")}
        }
      } */
    })


  
    return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className = "mr-16 text-center">
        <h1 className="mt-6 mb-6 text-center">Déjà client.e ?</h1>
        <div className="mb-6 flex flex-row">
          <div>
            <div className="mb-6">
              <input  defaultValue="test@test.fr"{...register("email")}type="email" id="email" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 pr-52 hover:border-violet-700" placeholder="email" required />
            </div>
            <div className="mb-6">
              <input defaultValue="testtest" {...register("mot_de_passe")}type="password" id="password" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5  pr-52 hover:border-violet-700" placeholder="mot de passe" required />
            </div>
            <button type ="submit"className="mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Me connecter</button>
          </div>  
        </div>
      </form>
    </div>
    );

}

export default Connexion