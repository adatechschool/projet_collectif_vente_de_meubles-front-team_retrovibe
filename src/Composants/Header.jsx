import React from 'react';
import logo from './logo-retrovibe.png';
import BtnCart from './BtnCart';

function Header() {
    return(
        <div class = "bg-white flex flex-row justify-evenly shadow-md sticky w-full top-0 z-10">
            <div>
                <a href="/home"class = "flex flex-row items-center">
                <img src = {logo} class = "w-28" />
                <h1 class = "text-black ml-2 mt-3 text-left text-xs">anciens meubles<br></br>pour une nouvelle vie</h1>
                </a>
            </div>
           
            <div class='flex flex-row items-center my-9 border-2 border-violet-400 transition-all duration-1000 hover:border-violet-700 focus:outline-none rounded-full px-1 '>
                <form>
                    <input type = "search" placeholder= "Rechercher..." class = "w-50 focus:outline-none px-4 mr-20" ></input>
                    <button type='submit' class= "w-8 h-8 bg-violet-400 rounded-full transition-all duration-1000 hover:bg-violet-700 focus:outline-none mx-2">🔍</button>                
                </form>
            </div>
           
            <div class='flex flex-row items-center justify-center mt-4 gap-4'>
                <a href="/MonCompte">
                <button type="submit" class="mb-4 text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Mon Compte</button>
                </a>
                <BtnCart/>
            </div>
            
        </div>
    )
};

export default Header;