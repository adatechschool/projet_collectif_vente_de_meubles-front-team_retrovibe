/* page 2 de la maquette */
import React, {useEffect, useState } from "react";
// import de la méthode useParams pour accéder aux infos de mon adresse navigateur
import { useParams } from 'react-router-dom';
import BtnCart from '../Composants/BtnCart';
import axios from 'axios';


function Product() {

     const [meuble, setMeuble] = useState({});
     const [currentImage, setCurrentImage] = useState(meuble.photo_1);
     const [currentPhoto, setCurrentPhoto] = useState(meuble.photo_2);


     

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
        <div className="flex flex-row justify-center mt-28 gap-7 mb-44">
            <div className="">
                <img className="w-full rounded-lg cursor-pointer object-fill border-2 border-candlelight-500"
                    onClick={() => setCurrentImage(meuble.photo_1)||setCurrentPhoto(meuble.photo_2)}
                    src={currentImage||meuble.photo_1} alt="visuel principal de l'article"/>
            </div>

            {/* DIV PHOTOS */}
            <div className="flex flex-col justify-start gap-6  ">
                    {meuble.photo_2 && (
                <div onClick={() => setCurrentImage(meuble.photo_2) || setCurrentPhoto(meuble.photo_1)}>
                    <img className="w-24 rounded-lg border-2 border-candlelight-500 cursor-pointer hover:scale-110 transition duration-700 ease-in-out "
                    src={currentPhoto||meuble.photo_2}
                    alt="2e visuel de l'article"/>
                </div>
                )}
                {meuble.photo_3 && (
                <div onClick={() => setCurrentImage(meuble.photo_3)}>
                    <img className="w-24 rounded-lg border-2 border-candlelight-500 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"
                    src={meuble.photo_3}
                    alt="3e visuel de l'article"/>
                </div>
                )}
                {meuble.photo_4 && (
                <div onClick={() => setCurrentImage(meuble.photo_4)}>
                    <img className="w-24 rounded-lg border-2 border-candlelight-500 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"
                    src={meuble.photo_4}
                    alt="4e visuel de l'article"/>
                </div>
                )}
                {meuble.photo_5 && (
                <div onClick={() => setCurrentImage(meuble.photo_5)}>
                    <img className="w-24 rounded-lg border-2 border-candlelight-500 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"
                    src={meuble.photo_5}
                    alt="5e visuel de l'article"/>
                </div>
                )}
            </div>

            {/* DIV INFOS */}
            <div className="shadow-lg ml-14  pt-8 px-8 tracking-wider">
                <div>
                    <h1 className="text-4xl pb-2 font-normal ">{meuble.nom}</h1>
                    <div className="pb-10">
                        <h1 className="text-4xl font-bold">{meuble.prix}<span className="text-xl font-normal"> €TCC</span></h1>
                    </div>
                </div>   
                <div className="text-lg space-y-1 italic font-light">
                    <h1 className="font-medium not-italic">{meuble.type}</h1>
                    {meuble.annee && <h1 className="font-medium not-italic">{meuble.annee}</h1>}
                    <h1>couleur(s) :
                        <ul className="font-medium not-italic">
                            <li>{meuble.couleur_1}</li>
                            {meuble.couleur_2 && <li>{meuble.couleur_2}</li>}
                        </ul>
                    <h1>matiere(s) : 
                        <ul className="font-medium not-italic">
                            <li>{meuble.matiere_1}</li>
                            {meuble.matiere_2 && <li>{meuble.matiere_2}</li>}
                        </ul>
                    </h1>
                    </h1> 
                    <h1>dimensions : <span className="not-italic font-normal">{meuble.longueur} x {meuble.largeur} x {meuble.hauteur}</span></h1>
                </div>
                <div className="justify-end pt-36 pl-48">
                <BtnCart meubleId={meuble.id} />
                </div>
            </div>
        </div>

    )
};


export default Product;