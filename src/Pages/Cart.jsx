/* page 5 de la maquette */
import React, {useEffect, useState} from "react";
import Croix from "./croix_supp.png";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

function Cart() {

    const [meubles, setMeubles] = useState([]);

    
    useEffect(() => {
        const loadMeubles = async () => {
        
            let meubleId = JSON.parse(localStorage.getItem('cart'));
    
            console.log("meubleId", meubleId)
            let tmpMeubles = [];
            for(let i = 0; i < meubleId.length; i++) {
                const response = await axios.get(`https://retrovibe.herokuapp.com/api/meubles/${meubleId[i]}`);
                tmpMeubles.push(response.data);
            }
            setMeubles(tmpMeubles);
        }
        loadMeubles();
        
    }, []);

    console.log("total", meubles)

    const total = meubles.reduce((acc, meuble) => acc + parseInt(meuble.prix), 0);


    return (
        <div className="flex flex-row justify-content-center">
        <div className="w-3/4 flex-column justify-end">
        
        <div className="flex flex-row justify-end">
        <h2 className="text-center text-3xl text-turbo-500 font-bold mt-8 mb-8 ml-44">Votre panier contient {meubles.length} articles:</h2>
        
        <button class="mb-6 mr-10 text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto m-auto px-5 py-2.5 text-center my-2 " alt="bouton du caddie">
        <FontAwesomeIcon icon={faBasketShopping} style={{color: "#e3dc02",}} />
        </button>
        </div>
        
       
        {meubles.map((meuble, index) => (

        <div className="w-3/4 flex flex-col p-4 ml-40" key={meuble.id}>
            <h2 className="text-xl text-violet-400 font-bold mb-4 ml-4">Article n°{index + 1}</h2>
            <div className="flex items-center bg-white p-4 border-2 border-turbo-500 rounded-md mb-4 shadow-lg h-48 ">
                <div className="flex flex-row">
                    <div className="w-1/5 h-4/6 rounded-full overflow-hidden mr-4 mt-2">
                        <img src={meuble.photo_1} alt="Visuel principal du produit" />
                    </div>
                    <div class = "flex flex-col">
                        <p className="font-bold mb-2">{meuble.nom}</p>
                        <div class = "flex flew-row">
                            <p className="mb-2">{meuble.type}</p>
                            <div>
                            <img src={Croix} alt="supprimer" className="w-10 h-10 ml-64 p-3 bg-violet-400 rounded-full"/>
                            </div>
                        </div>
                        <p class = "font-bold">{meuble.prix}</p>
                    </div>
                </div>
            </div>
            </div>
           ))} 

           
            </div>

            <div className="w-1/4 p-4 flex flex-col">
            <div className="bg-white p-4 rounded-md mb-4 h-5/6 border-2 border-violet-400 shadow-lg">
                <p className="font-bold ml-4 mt-4 text-2xl text-center">Récapitulatif de commande</p>
                <div className="flex flex-col mt-8 ml-8 mr-8">

                {meubles.map((meuble, index) => (
                    
                    <div className="flex justify-between">
                        <p className="tracking-wide">Article n°{index + 1}</p>
                        <p className="font-bold tracking-wide ml-28">{meuble.prix}</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                   
                ))}
                
                    <div class="content-none h-0.5 bg-black inset-y-0 mt-8 mb-8 ml-14 mr-14"/>
                    <div className="flex justify-between">
                        <p className="font-bold tracking-wide">Livraison</p>
                        <p className="font-bold tracking-wide ml-28">{meubles.length * 10}$</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                    <div class="content-none h-0.5 bg-black inset-y-0 mt-8 mb-8 ml-14 mr-14"/>
                    <div className="flex justify-between">
                        <p className="font-bold tracking-wide">Total</p>
                        <p className="font-bold tracking-wide ml-36">{total}$</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            
            
    )
}
     
  

export default Cart;