/* page 2 de la maquette */
import React, {useEffect, useState} from "react";
import BtnCart from '../Composants/BtnCart';
import axios from 'axios';


function Product() {

     const [meubles, setMeubles] = useState([]);
     useEffect(() => {
       axios.get('https://retrovibe.herokuapp.com/api/meubles/91')
         .then(response => {
           setMeubles(response.data);
         })
         .catch(error => {
           console.log(error);
         });
     }, []);

   
     console.log('nom', meubles.length)

    //  const name = meubles.nom;
    //  console.log('nom', name)

    return (

        // PHOTO PRINCIPALE
        <div class="flex flex-row justify-center items-cente gap-9 mt-16">
            <div class="w-2/5">
                <img class="rounded-lg border-4 border-mosque-400" src={meubles.photo_1} alt="visuel principal de l'article" />
            </div>

            {/* DIV PHOTOS */}
            <div class="flex flex-col justify-between">
                
                {meubles.photo_2 !== null &&
                    <div>
                        <img class="w-32 h-32 rounded-lg" src={meubles.photo_2} alt="2e visuel de l'article" />
                    </div>
                    }
                {meubles.photo_3 &&
                    <div>
                        <img class="w-32 h-32 rounded-lg" src={meubles.photo_3} alt="3e visuel de l'article" />
                    </div>
                    }
                {meubles.photo_4 ?
                    <div>
                        <img class="w-32 h-32 rounded-lg" src={meubles.photo_4} alt="4e visuel de l'article" />
                    </div>
                    : null}
                {meubles.photo_5 !== null &&
                    <div>
                        <img class="w-32 h-32 rounded-lg" src={meubles.photo_5} alt="5e visuel de l'article" />
                    </div>
                    }
            </div>

            {/* DIV INFOS */}
            <div class="shadow-lg ml-10 pl-10 pt-10 pr-10">
                <div>
                    <h1 class="text-2xl pb-4">{meubles.nom}</h1>
                    <div class="pb-14">
                        <h1 class="text-4xl font-bold">{meubles.prix}<span class="text-xl font-normal ">€TCC</span></h1>
                    </div>
                </div>
                <div class="text-lg space-y-1 italic font-light">
                    <h1>{meubles.type}</h1>
                    <h1>couleur(s) :
                        <ul>
                            <li>{meubles.couleur_1}</li>
                            {meubles.couleur_2 && <li>{meubles.couleur_2}</li>}
                        </ul>
                    </h1>
                    <h1>dimensions : 
                        <ul>
                            <li>longueur : {meubles.longueur} cm</li>
                            <li>largeur : {meubles.largeur} cm</li>
                            <li>hauteur : {meubles.hauteur} cm</li>
                        </ul>
                    </h1>
                    <h1>matiere(s) : 
                        <ul>
                            <li>{meubles.matiere_1}</li>
                            {meubles.matiere_2 && <li>{meubles.matiere_2}</li>}
                        </ul>
                    </h1>
                </div>
                <div class="pt-10">
                   <BtnCart />
                </div>
            </div>
        </div>

    )
};
export default Product;