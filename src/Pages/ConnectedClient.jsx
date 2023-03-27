/* page 1 de la maquette */
import axios from 'axios';
import React from 'react';
import LogOutButton from "../Composants/LogOutButton"

function connectedClient(){
    axios.get("https:retrovibe.herokuapp.com/api/utilisateurs")
        .then(function(response) {
            console.log(response.data);
            for (let i = 0; i < response.data.length; i++){
                if (localStorage.getItem('Id_ConnectedUser') === response.data[i].id) {
                    let salut = "Compte de " + response.data[i].prenom + " " + response.data[i].nom; // on récupère le nom et prenom de l'utilisateur clien connecter
                    console.log(salut);
                    break;
                }
            }
        })

    return(
    <div className="px-60 mt-20 h-screen justify-center">
        <LogOutButton/>
    </div>
    )};

export default connectedClient;