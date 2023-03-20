/* page 5 de la maquette */
import React from "react";
import Chaise from "./chaise_exemple.jpg";
import Croix from "./croix_supp.png";

function Cart() {
    return (
    <div className="flex flex-row justify-content-center">
        <div className="w-2/5 flex flex-col p-4 ml-40">
            <h2 className="text-xl font-bold mb-4 ml-4">Panier (nb_articles)</h2>
            <div className="flex items-center bg-white p-4 rounded-md mb-4 shadow-lg h-48 ">
                <div className="flex flex-row">
                    <div className="w-1/5 h-4/6 rounded-full overflow-hidden mr-4 mt-2">
                        <img src={Chaise} alt="Nom du produit 1" />
                    </div>
                    <div className = "flex flex-col">
                        <p className="font-bold mb-2">Nom du produit 1</p>
                        <div className = "flex flew-row">
                            <p className="mb-2">Categories du produit 1</p>
                            <div>
                            <img src={Croix} alt="supprimer" className="w-10 h-10 ml-64 p-3 bg-violet-400 rounded-full"/>
                            </div>
                        </div>
                        <p class = "font-bold">100€ TTC</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-md mb-4 shadow-lg h-48">
                <div className="flex flex-row">
                    <div className="w-1/5 h-4/6 rounded-full overflow-hidden mr-4 mt-2">
                        <img src={Chaise} alt="Nom du produit 1" />
                    </div>
                    <div class = "flex flex-col">
                        <p className="font-bold mb-2">Nom du produit 2</p>
                        <div class = "flex flew-row">
                            <p className="mb-2">Categories du produit 2</p>
                            <img src={Croix} alt="supprimer" className="w-10 h-10 ml-64 p-3 bg-violet-400 rounded-full" fill="white"/>
                        </div>
                        <p class = "font-bold">100€ TTC</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-md mb-4 shadow-lg h-48">
                <div className="flex flex-row">
                    <div className="w-1/5 h-4/6 rounded-full overflow-hidden mr-4 mt-2">
                        <img src={Chaise} alt="Nom du produit 1" />
                    </div>
                    <div class = "flex flex-col">
                        <p className="font-bold mb-2">Nom du produit 3</p>
                        <div class = "flex flew-row">
                            <p className="mb-2">Categories du produit 3</p>
                            <img src={Croix} alt="supprimer" className="w-10 h-10 ml-64 p-3 bg-violet-400 rounded-full" fill="white"/>
                        </div>
                        <p class = "font-bold">100€ TTC</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/4 p-4 ml-40 flex flex-col">
            <div className="bg-white p-4 rounded-md mb-4 h-5/6 shadow-lg">
                <p className="font-bold ml-4 mt-4 text-2xl text-center">Récapitulatif de commande</p>
                <div className="flex flex-col mt-8 ml-8 mr-8">
                    <div className="flex justify-between">
                        <p className="tracking-wide">Article_1</p>
                        <p className="font-bold tracking-wide ml-28">100$</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="tracking-wide">Article_2</p>
                        <p className="font-bold tracking-wide ml-28">100$</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="tracking-wide">Article_3</p>
                        <p className="font-bold tracking-wide ml-28">100$</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                    <div class="content-none h-0.5 bg-black inset-y-0 mt-8 mb-8 ml-14 mr-14"/>
                    <div className="flex justify-between">
                        <p className="font-bold tracking-wide">Livraison</p>
                        <p className="font-bold tracking-wide ml-28">50$</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                    <div class="content-none h-0.5 bg-black inset-y-0 mt-8 mb-8 ml-14 mr-14"/>
                    <div className="flex justify-between">
                        <p className="font-bold tracking-wide">Total</p>
                        <p className="font-bold tracking-wide ml-36">350$</p>
                        <p className="font-bold tracking-wide">TTC</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
}

export default Cart;