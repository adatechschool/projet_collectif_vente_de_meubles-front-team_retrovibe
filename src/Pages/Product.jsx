/* page 2 de la maquette */
import React, {useEffect, useState } from "react";
// import de la méthode useParams pour accéder aux infos de mon adresse navigateur
import { useParams } from 'react-router-dom';
import BtnCart from '../Composants/BtnCart';
import axios from 'axios';


function Product() {


    
     const [meuble, setMeuble] = useState({});

    // je recupère mon id du meuble dans l'adresse de mon navigateur avec useParams
     const { id } = useParams();

     useEffect(() => {
        // j'ajoute mon id du meuble dans ma requête
       axios.get(`https://retrovibe.herokuapp.com/api/meubles/${id}`)
         .then(response => {
           setMeuble(response.data);
         })
         .catch(error => {
           console.log(error);
         });
     }, [id]);

   
    //  console.log('nom', meuble.length)

    return (

        // PHOTO PRINCIPALE
        <div className="flex flex-row justify-between my-16 mx-28 border">
            <div>
                <img className=" h-full rounded-lg border-4 border-candlelight-500" src={meuble.photo_1} alt="visuel principal de l'article" />
            </div>

            {/* DIV PHOTOS */}
            <div className="flex flex-col justify-start">
                
                {meuble.photo_2 !== null &&
                    <div>
                        <img className="w-32 h-32 rounded-lg" src={meuble.photo_2} alt="2e visuel de l'article" />
                    </div>
                    }
                {meuble.photo_3 &&
                    <div>
                        <img className="w-32 h-32 rounded-lg" src={meuble.photo_3} alt="3e visuel de l'article" />
                    </div>
                    }
                {meuble.photo_4 ?
                    <div>
                        <img className="w-32 h-32 rounded-lg" src={meuble.photo_4} alt="4e visuel de l'article" />
                    </div>
                    : null}
                {meuble.photo_5 !== null &&
                    <div>
                        <img className="w-32 h-32 rounded-lg" src={meuble.photo_5} alt="5e visuel de l'article" />
                    </div>
                    }
            </div>

            {/* DIV INFOS */}
            <div className="shadow-lg ml-10 pl-10 pt-10 pr-10">
                <div>
                    <h1 className="text-2xl pb-4">{meuble.nom}</h1>
                    <div className="pb-14">
                        <h1 className="text-4xl font-bold">{meuble.prix}<span className="text-xl font-normal ">€TCC</span></h1>
                    </div>
                </div>
                <div className="text-lg space-y-1 italic font-light">
                    <h1>{meuble.type}</h1>
                    {meuble.annee && <h1>{meuble.annee}</h1>}
                    <h1>couleur(s) :
                        <ul>
                            <li>{meuble.couleur_1}</li>
                            {meuble.couleur_2 && <li>{meuble.couleur_2}</li>}
                        </ul>
                    <h1>matiere(s) : 
                        <ul>
                            <li>{meuble.matiere_1}</li>
                            {meuble.matiere_2 && <li>{meuble.matiere_2}</li>}
                        </ul>
                    </h1>
                    </h1>
                    <h1>dimensions : 
                        <ul>
                            <li>longueur : {meuble.longueur} cm</li>
                            <li>largeur : {meuble.largeur} cm</li>
                            <li>hauteur : {meuble.hauteur} cm</li>
                        </ul>
                    </h1>
                </div>
                <div className="pt-10">
                <BtnCart meubleId={meuble.id} />
                </div>
            </div>
        </div>

    )
};


export default Product;
