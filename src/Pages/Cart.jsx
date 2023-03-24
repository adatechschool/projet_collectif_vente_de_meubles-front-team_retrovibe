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
    <div className="flex flex-row mx-60 py-20 relative">
        <div className="w-8/12 flex flex-col"> 
            <h2 className="text-3xl text-candlelight-500 font-bold ml-24">Votre panier contient {meubles.length} articles:</h2>
        <div class="mt-2 ml-24"><ClearCartButton /></div>
            

            {meubles.map((meuble, index) => ( 
            <div className="w-3/4 flex flex-col p-4 ml-20" key={meuble.id}>
                <h2 className="text-xl text-violet-400 font-bold mb-4 ml-2">Article n°{index + 1}</h2>
                <div className="flex items-center bg-white p-2 border-2 border-candlelight-500 rounded-md mb-4 shadow-lg h-48 justify-between">
                    <div className="flex flex-row ">
                        <div className="w-1/5 h-4/6 rounded-lg overflow-hidden mx-4 mt-2 shadow-md hover:scale-110 transition duration-700 ease-in-out">
                         <a href={`/product/${meuble.id}`}>
                            <img className="rounded-lg shadow-md" src={meuble.photo_1} alt="visuel principal de l'article"></img>
                         </a>
                        </div>
                        <div class = "flex flex-col ml-2">
                            <p className="text-ms font-normal pt-4">{meuble.nom}</p>
                            <div class = "flex flew-row ">
                                <p className="mb-2 text-xs italic font-light">{meuble.type}</p>
                            </div>
                            <p class = "font-bold text-lg mt-7">{meuble.prix} <span className="font-normal">€TTC</span></p>
                        </div>
                    </div>
                    <div>
                        <img src={Croix} alt="supprimer" fill="white" className="w-10 h-10 p-3 bg-violet-400  hover:bg-violet-700 focus:outline-none hover:scale-110 transition duration-700 ease-in-out rounded-full border mr-10"/>
                    </div>
                </div>
            </div>
            ))}  
        </div>

        <div className=" relative">
            <div className="bg-white rounded-md p-4 border-2 border-violet-400 shadow-lg sticky top-40 bottom-40">
                <p className="font-bold mt-6 text-lg mx-16">Récapitulatif de commande</p>
                <div className="flex flex-col mt-8 mb-32 justify-around mx-14">
                {meubles.map((meuble, index) => (
                    <div className="flex justify-between">
                        <p className="tracking-wide text-xs">Article n°{index + 1}</p>
                        <div className="flex flex-row gap-3">
                            <p className="font-extrabold tracking-wide ">{meuble.prix}</p>
                            <p className="tracking-wide font-normal">€TTC</p>
                        </div>
                    </div>
                    ))}
                    <div class="content-none h-px bg-black inset-y-0 my-8 mx-10"></div>
                    <div className="flex justify-between">
                        <p className="tracking-wide text-xs">Livraison</p>
                        <div className="flex flex-row gap-3">
                            <p className="font-extrabold tracking-wide ">{meubles.length * 10}</p>
                            <p className="tracking-wide font-normal">€TTC</p>
                        </div>
                       
                    </div>
                    <div class="content-none h-px bg-black inset-y-0 my-8 mx-10"/>
                    <div className="flex justify-between">
                        <p className="font-bold tracking-wide text-lg">Total</p>
                        <div className="flex flex-row gap-3">
                            <p className="font-extrabold tracking-wide ">{total}</p>
                            <p className="tracking-wide font-normal">€TTC</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )   
}
     
export default Cart;