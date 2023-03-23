/* page 5 de la maquette */
import React, {useEffect, useState} from "react";
import axios from 'axios';
import ClearCartButton from '../Composants/ClearCartButton';
import ClearCartButtonByOne from '../Composants/ClearCartButtonByOne';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";




function Cart() {
    const [meubles, setMeubles] = useState([]);

    useEffect(() => {
        const loadMeubles = async () => {

            // je récupère mon tableau contenant les ID des meubles cliqués de mon localStorage
        
            let meubleId = JSON.parse(localStorage.getItem('cart'));
    
            let tmpMeubles = [];

            // je passe les ID un par un à mon axios
            for(let i = 0; i < meubleId.length; i++) {
                const response = await axios.get(`https://retrovibe.herokuapp.com/api/meubles/${meubleId[i]}`);

                // je push mes objets meubles récupérés dans un nouveau tableau
                tmpMeubles.push(response.data);
            }
            setMeubles(tmpMeubles);
        }
        loadMeubles();
        
    }, []);

    // je calcule mon total prix des articles
    const total = meubles.reduce((acc, meuble) => acc + parseInt(meuble.prix), 0);

    // petite fonction en ternaire pour afficher le nombre d'articles.
    function getArticleString(meubles) {
        const count = meubles.length;
        return count === 0 ? "Votre panier est vide 😕" : `Votre panier contient ${count} article${count > 1 ? "s 😄" : " 😏"}`;
      }
      

    return (
    <div className="flex flex-row justify-content-center">
        <div className="w-8/12 flex-column"> 
            <div className="flex flex-col mt-8">
                <h2 className="text-3xl text-candlelight-500 font-bold mt-8 mb-2 ml-24">{getArticleString(meubles)}</h2>
                <div class="mt-2 ml-24"><ClearCartButton /></div>
            </div>

            {meubles.map((meuble, index) => (
            <div className="w-3/4 flex flex-col p-4 ml-20" key={meuble.id} id={meuble.id}>
                <h2 className="text-xl text-violet-400 font-bold mb-4 ml-2">Article n°{index + 1}</h2>
                <div className="flex items-center bg-white p-4 border-2 border-candlelight-500 rounded-md mb-4 shadow-lg h-48 ">
                    <div className="flex flex-row justify-between">
                        <div className="w-1/5 h-4/6 rounded-full overflow-hidden mr-4 mt-2">
                            <img src={meuble.photo_1} alt="Visuel principal du produit" />
                        </div>
                        <div class = "flex flex-col">
                            <p className="font-bold mb-2">{meuble.nom}</p>
                            <div class = "flex flew-row">
                                <p className="mb-2">{meuble.type}</p>
                                
                            </div>
                            <p class = "font-bold">{meuble.prix}</p>
                        </div>
                                <div>
                                    <ClearCartButtonByOne indexMeuble={index}/>
                                </div>
                    </div>
                </div>
            </div>
            ))}  
        </div>

        <div className="w-4/12 p-4 flex flex-col mt-16 fixed right-20">
            <div className="bg-white p-4 rounded-md mb-4 border-2 border-violet-400 shadow-lg ">
                <p className="font-bold ml-4 mt-4 text-2xl text-center">Récapitulatif de commande</p>
                <div className="flex flex-col mt-8 ml-8 mr-8 mb-32">
                {meubles.map((meuble, index) => (
                    <div className="flex justify-between">
                        <p className="tracking-wide">Article n°{index + 1}</p>
                        <p className="font-bold tracking-wide ml-28">{meuble.prix} €</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                    ))}
                    <div class="content-none h-0.5 bg-black inset-y-0 mt-8 mb-8 ml-14 mr-14"/>
                    <div className="flex justify-between">
                        <p className="font-bold tracking-wide">Livraison</p>
                        <p className="font-bold tracking-wide ml-28">{meubles.length * 10} €</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                    <div class="content-none h-0.5 bg-black inset-y-0 mt-8 mb-8 ml-14 mr-14"/>
                    <div className="flex justify-between">
                        <p className="font-bold tracking-wide">Total</p>
                        <p className="font-bold tracking-wide ml-36">{total + (meubles.length * 10)} €</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )   
}
     
export default Cart;