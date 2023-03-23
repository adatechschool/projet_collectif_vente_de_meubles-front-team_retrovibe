/* page 5 de la maquette */
import React, {useEffect, useState} from "react";
import Croix from "./croix_supp.png";
import axios from 'axios';
import ClearCartButton from '../Composants/ClearCartButton';

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
    <div className="relative mx-60 py-20 flex flex-row">
        <div className="w-8/12 flex flex-col"> 
                <h2 className="text-3xl text-candlelight-500 font-bold mb-4">Votre panier contient {meubles.length} articles</h2>
                <div><ClearCartButton /></div>

            {meubles.map((meuble, index) => (
            <div className="w-3/4 flex flex-col py-4" key={meuble.id}>
                <h2 className="text-xl text-violet-400 font-bold mb-4">Article n°{index + 1}</h2>
                <div className="justify-around items-center flex flex-row bg-white p-4 border-2 border-candlelight-500 rounded-md mb-4 shadow-lg h-48 ">
                        <div className="w-1/5 h-4/6 rounded-full">
                            <img src={meuble.photo_1} alt="Visuel principal du produit" />
                        </div>
                        <div class = "flex flex-col">
                            <p className="font-bold mb-2">{meuble.nom}</p>
                            <p className="mb-2">{meuble.type}</p>
                            <p class = "font-bold">{meuble.prix}</p>
                        </div>
                        <div>
                            <img src={Croix} alt="supprimer" className="w-10 h-10 p-3 bg-violet-400 rounded-full"/>
                        </div>
                </div>
            </div>
            ))}  
        </div>

        <div className="relative">
            <div className="bg-white rounded-md p-4 border-2 border-violet-400 shadow-lg sticky top-40 bottom-40 ">
                <p className="text-violet-700 font-bold ml-4 mt-4 text-2xl text-center">Récapitulatif de commande</p>
                <div className="flex flex-col m-8">
                {meubles.map((meuble, index) => (
                    <div className="flex justify-between">
                        <p className="tracking-wide">Article n°{index + 1}</p>
                        <p className="font-bold tracking-wide ml-28">{meuble.prix} $</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                    ))}
                    <div class="content-none h-0.5 bg-black inset-y-0 mt-8 mb-8 ml-14 mr-14"/>
                    <div className="flex justify-between">
                        <p className="font-bold tracking-wide">Livraison</p>
                        <p className="font-bold tracking-wide ml-28">{meubles.length * 10} $</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                    <div class="content-none h-0.5 bg-black inset-y-0 mt-8 mb-8 ml-14 mr-14"/>
                    <div className="text-violet-700 font-bold flex justify-between text-2xl">
                        <p className=" tracking-wide">Total</p>
                        <p className="tracking-wide ml-36">{total} $</p>
                        <p className="tracking-wide">TTC</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )   
}
     
export default Cart;