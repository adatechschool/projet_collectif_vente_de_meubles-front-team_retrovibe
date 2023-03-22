import React from 'react';
import logo from './logo-retrovibe.png';
import CartButtonPage from './CartButtonPage';

function Header() {
    return(
        <div className = "bg-white flex flex-row justify-evenly shadow-md sticky w-full top-0 z-10">
            <div>
                <a href="/home"className = "flex flex-row items-center">
                <img src = {logo} className = "w-28" alt= "logo de notre site Retrovibe" />
                <h1 className = "text-black ml-2 mt-3 text-left text-xs">anciens meubles<br></br>pour une nouvelle vie</h1>
                </a>
            </div>
           
            <div className='flex flex-row items-center my-9 border-2 border-violet-400 transition-all duration-1000 hover:border-violet-700 focus:outline-none rounded-full px-1 '>
                <form>
                    <input type = "search" placeholder= "Rechercher..." className = "w-50 focus:outline-none px-4 mr-20" ></input>
                    <button type='submit' className= "w-8 h-8 bg-violet-400 rounded-full transition-all duration-1000 hover:bg-violet-700 focus:outline-none mx-2">🔍</button>                
                </form>
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