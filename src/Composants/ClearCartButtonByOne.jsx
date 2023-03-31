import React from 'react';
import Croix from "../Pages/croix_supp.png";


// SUPPRIMER UN ARTICLE A LA FOIS EN SUPPRIMANT DU LOCALSTORAGE UNE VALEUR DU TABLEAU CONTENANT LES ID DES MEUBLES.



function ClearCartButtonByOne(props) {
    const clearStorageByOne = () => {

        // Récupérer les éléments du panier (un tableau avec l'ID de l'article) depuis le local storage 
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        /* via props, je recup d'une page à l'autre l'index du meuble dans mon tableau meubles de ma page cart. 
        (voir le bouton avec indexMeuble={index})
        Je supprime ce meuble de mon localeStorage via son index et splice.*/
        cartItems.splice(props.indexMeuble, 1); 

        // Stocker la nouvelle liste dans le local storage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Afficher la liste des éléments du panier dans la console (désactiver le rafraichissement pour voir)
        console.log('localstorageOneLess', JSON.parse(localStorage.getItem('cart')));

        // je rafraichis ma page
        window.location.reload(false);


      


        

    }
        return (
            <button onClick={clearStorageByOne} alt="bouton du caddie">
                <img src={Croix} alt="supprimer" className='w-10 h-10 p-3 bg-violet-400  hover:bg-violet-700 focus:outline-none hover:scale-110 transition-all duration-500 ease-in-out rounded-full border' />
            </button>
          );
        
    }

    // export const clearStorageByOne = (index) => {
    //     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    //     console.log('cartItems', cartItems)
    //     // console.log('index', index)

    //     cartItems.splice(index, 1);

    //     // Update localStorage with the modified cart
    //     localStorage.setItem('cart', JSON.stringify(cartItems));
        
    //     // window.location.reload(false);
        

    // }
    
    export default ClearCartButtonByOne;