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

        // DIV GENERALE
        <div className="sm:px-20 sm:py-10 p-5 flex sm:flex-row flex-col sm:justify-center bg-violet-100">
            {/* DIV PHOTO PRINCIPALE*/}
            <div className="">
                <img className="w-full rounded-lg cursor-pointer object-fill border-2 border-candlelight-500"
                    onClick={() => setCurrentImage(meuble.photo_1)||setCurrentPhoto(meuble.photo_2)}
                    src={currentImage||meuble.photo_1} alt="visuel principal de l'article"/>
            </div>

            {/* DIV PHOTOS */}
            <div className="flex sm:flex-col flex-row py-2 gap-2 sm:ml-6">
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
            <div className="flex flex-col shadow-lg p-8 tracking-wider bg-white sm:ml-12 place-content-between">
                <div>
                <div>
                    <h1 className="text-2xl pb-6 font-bold ">{meuble.nom}</h1>
                </div>   
                <div className="text-sm space-y-1 italic font-light">
                    <h1 className="font-normal not-italic text-base">{meuble.type}</h1>
                    {meuble.annee && <h1 className="font-normal not-italic">{meuble.annee}</h1>}
                    <h1 className="font-normal not-italic"><span className="italic font-light">couleur(s)</span> : {meuble.couleur_1}, {meuble.couleur_2 && <span>{meuble.couleur_2}</span>}</h1>
                    <h1 className="font-normal not-italic"><span className="italic font-light">matiere(s)</span> : {meuble.matiere_1}, {meuble.matiere_2 && <span>{meuble.matiere_2}</span>}</h1> 
                    <h1>dimensions : <span className="not-italic font-normal">{meuble.longueur} x {meuble.largeur} x {meuble.hauteur}</span></h1>
                </div>
                </div>
                <div className="pt-6">
                    <BtnCart meubleId={meuble.id} meublePrix={meuble.prix}/>
                </div>
            </div>
        </div>

    )
};


export default Product;