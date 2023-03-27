// https://cors-anywhere.herokuapp.com/corsdemo : pour communiquer avec la base de données depuis le localhost il faut activer l'essai demo sur ce lien a chaque fois 

import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
// import du useNavigate qui permet d'aller vers la bonne route quel que soit le serveur (localhost ou heroku)
import { useNavigate } from "react-router-dom";

function Connexion (){
    // j'utilise le hook useNavigate pour changer de page au oneSubmit
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { error } } = useForm();
    const onSubmit = data => axios.get("https://cors-anywhere.herokuapp.com/https://retrovibe.herokuapp.com/api/utilisateurs")
    .then(function (response){
      console.log(response.data)
      for (let i=0; i<response.data.length; i++){
        if (response.data[i].email === data.email){
          axios.get(`https://cors-anywhere.herokuapp.com/https://retrovibe.herokuapp.com/api/utilisateurs/${response.data[i].id}?email=${data.email}&mot_de_passe=${data.mot_de_passe}`) // methode Get One pour verifier le mail et le mot de passe
            .then(function (response2){
              console.log(response2.data)
              localStorage.setItem('Id_ConnectedUser',response2.data.id); // ajout de l'id de l'utilisateur connecter au localstorage 
              console.log(localStorage.getItem('Id_ConnectedUser'))

              // window.location.assign('http://localhost:3000/connectedclient')
              // j'appelle ici mon useNavigate() avec la route souhaitée plutôt que d'utiliser window.location.assign
              navigate('/connectedclient')
            })
          break;
        } else {console.log("mail incorrect");}
      }
    })

    return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className = "md:mr-16 text-center">
        <h1 className="mt-6 mb-6 text-center">Déjà client.e ?</h1>
        <div className="mb-6 flex flex-row">
          <div>
            <div className="mb-6">
              <input  defaultValue="" size="50"{...register("email")}type="email" id="email" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 pr-42 hover:border-violet-700" placeholder="email" required />
            </div>
            <div className="mb-6">
              <input defaultValue="" size="50" {...register("mot_de_passe")}type="password" id="password" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5  pr-42 hover:border-violet-700" placeholder="mot de passe" required />
            </div>
            <button type ="submit"className="mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Me connecter</button>
          </div>  
        </div>
      </form>
    </div>
    );

}

export default Connexion