/* page 4 de la maquette */

import React, {useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Inscription from "../Composants/Inscription"

/* function getTableUsers (){
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    axios.get(`https://retrovibe.herokuapp.com/api/utilisateurs`)
    .then(response => {
    setUtilisateurs(response.data);
    console.log(response.data);
    })
    .catch(error => {
    console.log(error);
    });
    },[])
  } 


function CheckIdentity (inputData){
  console.log(inputData)
  const emailToCheck = inputData.email;
  const passwordToCheck = inputData.mot_de_passe;
} */

function Connexion() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (  
    <div className = "flex justify-center mt-32">
      <form onSubmit={handleSubmit(onSubmit)} className = "mr-16 text-center">
        <h1 className="mt-6 mb-6 text-center">Déjà client.e ?</h1>
        <div className="mb-6 flex flex-row">
          <div>
            <div className="mb-6">
              <input {...register("email")}type="email" id="email" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5 pr-52 hover:border-violet-700" placeholder="email" required />
            </div>
            <div className="mb-6">
              <input {...register("mot_de_passe")}type="password" id="password" className="bg-slate-100 border-2 border-violet-400 text-gray-900 text-sm rounded-lg focus:outline-none block p-2.5  pr-52 hover:border-violet-700" placeholder="mot de passe" required />
            </div>
            <button type ="submit"className="mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Me connecter</button>
          </div>  
        </div>
      </form>

      <div className= "content-none w-0.5 bg-violet-400 inset-y-0 ">

      </div>


    </div>
  )
}
export default Connexion;
