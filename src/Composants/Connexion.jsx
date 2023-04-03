// https://cors-anywhere.herokuapp.com/corsdemo : pour communiquer avec la base de données depuis le localhost il faut activer l'essai demo sur ce lien a chaque fois 

import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
// import du useNavigate qui permet d'aller vers la bonne route quel que soit le serveur (localhost ou heroku)
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Connexion (){
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { error } } = useForm();

  const onSubmit = data => axios.get("https://retrovibe.herokuapp.com/api/utilisateurs")
  .then(function (response){
    console.log(response.data);
    let emailMatch = false;

    for (let i=0; i<response.data.length; i++){
      if (response.data[i].email === data.email){
        emailMatch = true;
        axios.get(`https://retrovibe.herokuapp.com/api/utilisateurs/${response.data[i].id}?email=${data.email}&mot_de_passe=${data.mot_de_passe}`)
          .then(function (response2){
            localStorage.setItem('Id_ConnectedUser',response2.data.id);
            navigate('/home');
            toast.success('Vous êtes connecté ! 😃', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
          break;
      }
    }
    if (!emailMatch) {
      toast.error('Adresse e-mail incorrecte !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  })

    return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className = "">
        <h1 className="text-center mb-8">Déjà client.e ?</h1>
        <div className="flex flex-col justify-center text-sm  space-y-2">
              <input  defaultValue="" size="50"{...register("email")}type="email" id="email" className="focus:outline-none p-3 bg-slate-100 border-2 border-violet-400 text-gray-900 rounded-lg hover:border-violet-700" placeholder="email" required />
              <input defaultValue="" size="50" {...register("mot_de_passe")}type="password" id="password" className="bg-slate-100 focus:outline-none border-2 p-3 border-violet-400 text-gray-900 rounded-lg hover:border-violet-700" placeholder="mot de passe" required />
            <button type ="submit"className="self-center focus:outline-none w-1/2 text-white bg-violet-400 hover:bg-violet-700 font-medium rounded-lg sm:w-auto px-5 py-2.5 text-center">Me connecter</button>
        </div>
      </form>
    </div>
    );

}

export default Connexion