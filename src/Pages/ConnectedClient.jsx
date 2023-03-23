/* page 1 de la maquette */

import axios from 'axios';
import { func } from 'prop-types';
import React from 'react';

function connectedClient(){
    axios.get("https://cors-anywhere.herokuapp.com/https://retrovibe.herokuapp.com/api/utilisateurs")
        .then(function(response) {
            console.log(response.data);
            for (let i = 0; i < response.data.length; i++){
                if (localStorage.getItem('Id_ConnectedUser') == response.data[i].id) {
                    let salut = "Compte de " + response.data[i].prenom + " " + response.data[i].nom;
                    console.log(salut);
                    break;
                }
            }
        })

    return(
    <div className="w-full pl-60 pr-60 text-center mt-20 h-screen">
        <h2 className="font-bold">Mes recherches</h2>
        <button type="submit" className="mt-10 shadow-md mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">🔎 chaise rouge</button>
    </div>
    )};

export default connectedClient;