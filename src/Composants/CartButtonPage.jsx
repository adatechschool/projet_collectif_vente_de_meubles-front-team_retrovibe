import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";


function CartButtonPage() {
    return(
        <a href="/cart" >
        <button className="sm:h-12 sm:w-12 sm:m-2 w-7 h-7 m-1 bg-violet-400 transition-all duration-500 hover:bg-violet-700 rounded-lg" alt="bouton du caddie">
        <FontAwesomeIcon icon={faBasketShopping} style={{color: "#FFD91A",}} />
        </button>
        </a>
    )
}

export default CartButtonPage;