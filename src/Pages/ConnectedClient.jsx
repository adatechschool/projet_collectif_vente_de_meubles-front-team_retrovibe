/* page 1 de la maquette */
import axios from 'axios';
import React, {useEffect, useState } from "react";
import LogOutButton from "../Composants/LogOutButton";
import LookedArticleButton from "../Composants/LookedArticleButton";

function ConnectedClient() {
    const [salut, setSalut] = useState("");
  
    useEffect(() => {
      axios.get("https:retrovibe.herokuapp.com/api/utilisateurs")
        .then(function(response) {
          for (let i = 0; i < response.data.length; i++) {
            if (+(localStorage.getItem('Id_ConnectedUser')) === response.data[i].id) {
              let salutMsg = "Bonjour " + response.data[i].prenom +",";
              console.log('salut', salutMsg)
              console.log(typeof response.data[i].id)
              setSalut(salutMsg);
              break;
            }
          }
        });
    }, []);
  
    return (
        <div className="flex flex-col mt-20 items-center">
        {/* <div className="px-60 mt-20 h-screen justify-center"></div> */}
          <p className='pb-10'>{salut} <br/>nous sommes ravis de vous revoir !</p>
          <div className="flex flex-row pb-10">
            <LogOutButton/>
            <LookedArticleButton/>
          </div>
        </div>
      
    );
  }

export default ConnectedClient;