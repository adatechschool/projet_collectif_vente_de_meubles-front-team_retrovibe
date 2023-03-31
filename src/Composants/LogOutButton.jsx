import React from "react";
import { useNavigate } from "react-router-dom";


function LogOutButton() {

    const navigate = useNavigate();

    const clearStorageId = () => {

        // Récupérer les éléments du panier (un tableau avec l'ID de l'article) depuis le local storage 
        const IdStored = JSON.parse(localStorage.getItem('Id_ConnectedUser')) || [];

        // Stocker la nouvelle liste dans le local storage
        localStorage.removeItem('Id_ConnectedUser');
        navigate('/home')
        window.location.reload(false)

    }
        return (
            <button onClick={clearStorageId} alt="bouton log out" className='sm:w-32 sm:h-12 sm:m-2 w-24 h-7 m-1 text-white bg-violet-400 transition-all duration-500 hover:bg-violet-700 rounded-lg focus:outline-none hover:scale-110 ease-in-out'> Déconnexion
            </button>
          );
        
    }
    
    export default LogOutButton;