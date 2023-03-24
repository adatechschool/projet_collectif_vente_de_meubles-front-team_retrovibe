import React from 'react';


function LogOutButton() {
    const clearStorageId = () => {

        // Récupérer les éléments du panier (un tableau avec l'ID de l'article) depuis le local storage 
        const IdStored = JSON.parse(localStorage.getItem('Id_ConnectedUser')) || [];

        // Stocker la nouvelle liste dans le local storage
        localStorage.removeItem('Id_ConnectedUser');
        
        // je rafraichis ma page
        window.location.reload(false);

    }
        return (
            <button onClick={clearStorageId} alt="bouton log out" className='w-20 mb-4 text-white bg-violet-700 hover:bg-violet-400 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center focus:outline-none hover:scale-110 transition duration-700 ease-in-out'> Déconnexion
            </button>
          );
        
    }
    
    export default LogOutButton;