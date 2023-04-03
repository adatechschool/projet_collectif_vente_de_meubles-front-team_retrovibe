import React from "react";
import { useNavigate } from "react-router-dom";


function LookedArticleButton() {

    const navigate = useNavigate();

    const goToFavorisPage = () => {

        
        navigate('/favoris')
        window.location.reload(false)

    }
        return (
            <button onClick={goToFavorisPage} alt="bouton log out" className='sm:w-32 sm:h-12 sm:m-2 w-24 h-7 m-1 text-white bg-violet-400 transition-all duration-500 hover:bg-violet-700 rounded-lg focus:outline-none hover:scale-110 ease-in-out'> Favoris
            </button>
          );
        
    }
    
    export default LookedArticleButton;