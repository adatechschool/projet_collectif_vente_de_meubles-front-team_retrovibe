import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


/*Dans cet exemple, nous avons créé une fonction handleClick qui utilise la méthode setItem du localstorage 
pour enregistrer une donnée dans le stockage local. 
Ensuite, nous avons ajouté l'événement onClick à notre bouton, qui appelle la fonction handleClick lorsque le 
bouton est cliqué. Lorsque l'utilisateur clique sur le bouton, la valeur est enregistrée dans le localstorage.

Lorsque le bouton est cliqué, nous utilisons la méthode setItem du localstorage pour enregistrer les détails de 
l'article dans le stockage local en utilisant JSON.stringify pour convertir l'objet en chaîne de caractères.*/


// function BtnCart(props) {
//   const handleClick = () => {
//     localStorage.setItem("cart", props.meubleId);
//     console.log("localstorage", localStorage.getItem("cart"));
//   }

//   return(
//     <button onClick={handleClick} className="mb-6 text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto m-auto px-5 py-2.5 text-center my-2" alt="bouton du caddie">
//       <FontAwesomeIcon icon={faCartShopping} />
//     </button>
//   )
// }

function BtnCart(props) {
    const handleClick = () => {
      // Récupérer les éléments du panier depuis le local storage
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
      // Ajouter le nouvel élément à la liste
      cartItems.push(props.meubleId);
  
      // Stocker la nouvelle liste dans le local storage
      localStorage.setItem('cart', JSON.stringify(cartItems));
  
      // Afficher la liste des éléments du panier dans la console
      console.log('localstorage', localStorage.getItem('cart'));
    };
  
    return (
      <button
        onClick={handleClick}
        className="mb-6 text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto m-auto px-5 py-2.5 text-center my-2"
        alt="bouton du caddie"
      >
        <FontAwesomeIcon icon={faCartShopping} style={{color: "#e3dc02",}}/>
      </button>
    );
  }



export default BtnCart;