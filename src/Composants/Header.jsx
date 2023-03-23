import React from 'react';
import logo from './logo-retrovibe.png';
import CartButtonPage from './CartButtonPage';
/* import Searchbutton from './Searchbutton'; */
import Searchbar from './Searchbar';

function Header() {
    return(
        <div className = "bg-white flex flex-row align-baseline justify-evenly shadow-md sticky w-full top-0 z-10 pb-2">
            <div>
                <a href="/home"className = "flex flex-row items-center">
                <img src = {logo} className = "w-28" alt= "logo de notre site Retrovibe" />
                <h1 className = "text-black ml-2 mt-3 text-left text-xs">anciens meubles<br></br>pour une nouvelle vie</h1>
                </a>
            </div>
            <div class='flex flex-row items-center justify-center mt-4 gap-4'>
                <Searchbar/>
            </div>
            <div class='flex flex-row items-center justify-center mt-4 gap-4'>
                <a href="/MonCompte">
                    <button type="submit" class="mb-4 text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Mon Compte</button>
                </a>
                <CartButtonPage/>
            </div>
            
        </div>
    )
};

export default Header;