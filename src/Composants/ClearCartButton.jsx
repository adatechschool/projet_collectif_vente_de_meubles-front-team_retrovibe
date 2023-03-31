import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";


// VIDER LE PANIER EN SUPPRIMANT DU LOCALSTORAGE LE TABLEAU CONTENANT LES ID DES MEUBLES.


function ClearCartButton() {
    const clearStorage = () => {

        // Récupérer les éléments du panier (un tableau avec l'ID de l'article) depuis le local storage 
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        console.log('cartItems', cartItems)

        // je vide mon tableau donc tous les meubles de ma page
        cartItems = [];
        console.log('cartItems2', cartItems)

        // Stocker la nouvelle liste dans le local storage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Afficher la liste des éléments du panier dans la console (désactiver le rafraichissement pour voir)
        console.log('localstorageNew', localStorage.getItem('cart'));

        // je rafraichis ma page
        window.location.reload(false);


    }
        return (
            <button onClick={clearStorage} className="font-bold tracking-wide text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none rounded-lg text-center sm:my-6 sm:mr-10 sm:px-5 sm:py-2.5" alt="bouton du caddie">
                                           {/* className="font-bold tracking-wide mb-6 mr-10 text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none rounded-lg text-center" alt="bouton du caddie" */}
                Vider mon panier <FontAwesomeIcon icon={faBasketShopping} style={{color: "#FFD91A",}} />
            </button>
        
          );
        
    }


    export default ClearCartButton;