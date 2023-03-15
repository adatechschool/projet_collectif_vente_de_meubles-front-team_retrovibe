/* page 5 de la maquette */
import React from "react";
import Chaise from "./chaise_exemple.jpg";
import Croix from "./croix_supp.jpg";

function Cart() {
    return (
    <div className="flex flex-row justify-content-center">
    <div className="w-2/5 flex flex-col p-4 ml-40">
    <h2 className="text-lg font-bold mb-4">Panier (nb_articles)</h2>
    <div className="flex items-center bg-white p-4 rounded-md mb-4 shadow-lg h-48">
    <div className="w-1/5 h-4/6 rounded-full overflow-hidden mr-4 mt-5">
    <img src={Chaise} alt="Nom du produit 1" />
    </div>
    <div className="flex-1">
    <p className="font-bold mb-2">Nom du produit 1</p>
    <p className="mb-2">Categories du produit 1</p>
    <p>Prix: 50€</p>
    <img src={Croix} alt="supprimer" className="w-5 h-5 float-right" />
    </div>
    </div>
    <div className="flex items-center bg-white p-4 rounded-md mb-4 shadow-lg h-48">
    <div className="w-1/5 h-4/6 rounded-full overflow-hidden mr-4 mt-5">
    <img src={Chaise} alt="Nom du produit 2" />
    </div>
    <div className="flex-1">
    <p className="font-bold mb-2">Nom du produit 2</p>
    <p className="mb-2">Categories du produit 2</p>
    <p>Prix: 75€</p>
    <img src={Croix} alt="supprimer" className="w-4 h-4 float-right" />
    </div>
    </div>
    <div className="flex items-center bg-white p-4 rounded-md mb-4 shadow-lg h-48">
    <div className="w-1/5 h-4/6 rounded-full overflow-hidden mr-4 mt-5">
    <img src={Chaise} alt="Nom du produit 3" />
    </div>
    <div className="flex-1">
    <p className="font-bold mb-2">Nom du produit 3</p>
    <p className="mb-2">Categories du produit 3</p>
    <p>Prix: 100€</p>
    <img src={Croix} alt="supprimer" className="w-4 h-4 float-right" />
    </div>
    </div>
    </div>
    <div className="w-1/4 p-4 ml-40 flex flex-col">
    <h2 className="text-lg font-bold mb-4">Résumé du panier</h2>
    <div className="bg-white p-4 rounded-md mb-4 h-5/6 shadow-lg">
    <p className="font-bold mb-2">Total:</p>
    <p className="font-bold">225€</p>
    </div>
    </div>
    </div>
    );
}

export default Cart;