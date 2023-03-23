import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";


function ClearCartButton() {
    const clearStorage = () => {

        localStorage.clear();
        window.location.reload(false);

    }
        return (
            <button onClick={clearStorage} className="font-bold tracking-wide mb-6 mr-10 text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none rounded-lg  sm:w-auto m-auto px-5 py-2.5 text-center my-2 " alt="bouton du caddie">
                Vider mon panier <FontAwesomeIcon icon={faBasketShopping} style={{color: "#FFD91A",}} />
            </button>
        
          );
        
    }


    export default ClearCartButton;