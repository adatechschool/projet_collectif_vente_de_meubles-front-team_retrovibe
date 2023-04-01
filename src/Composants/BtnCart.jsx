import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';

// RECUPERER DANS LE LOCALSTORAGE L'ID DE CHAQUE MEUBLE CLIQUE

/*Dans cet exemple, nous avons créé une fonction handleClick qui utilise la méthode setItem du localstorage 
pour enregistrer une donnée dans le stockage local. 
Ensuite, nous avons ajouté l'événement onClick à notre bouton, qui appelle la fonction handleClick lorsque le 
bouton est cliqué. Lorsque l'utilisateur clique sur le bouton, la valeur est enregistrée dans le localstorage.

Lorsque le bouton est cliqué, nous utilisons la méthode setItem du localstorage pour enregistrer les détails de 
l'article dans le stockage local en utilisant JSON.stringify pour convertir l'objet en chaîne de caractères.*/


function BtnCart(props) {
      const handleClick = () => {
      // Récupérer les éléments du panier (un tableau avec l'ID de l'article) depuis le local storage 
      // c'est une string que je convertis en objet avec JSON.parse
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      // Ajouter le nouvel élément à la liste (je push mes objets dans un array)
      cartItems.push(props.meubleId);

  
      // Stocker la nouvelle liste dans le local storage (je le retransforme en string avec JSON.stringify
      // pour pouvoir le renvoyer au serveur localStorage)
      localStorage.setItem('cart', JSON.stringify(cartItems));

      // Afficher la liste des éléments du panier dans la console
      console.log('localstorage', localStorage.getItem('cart'));

      toast.success('🦄 Ajouté au panier !', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

      

    };
  
    return (
      <button
        onClick={handleClick}
        className="flex justify-center items-center text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5"
        alt="bouton du caddie"
      >
        {props.meublePrix ? props.meublePrix + "€" : "Acheter"} 
        <FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD91A",}} className="mx-2"/>
      </button>
      
    );
  }


export default BtnCart;