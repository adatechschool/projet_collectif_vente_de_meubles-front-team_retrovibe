import React from 'react';
import logo from './logo-retrovibe.png';
import loupe from './Loupe.png';
import BtnCart from './BtnCart';

function Header() {
    return(
        <div class = "bg-white flex flex-row justify-evenly p-2.5 shadow-md sticky w-full top-0 z-0">
            <div class = "flex flex-row items-center">
                <img src = {logo} class = "w-28" />
                <h1 class = "text-black ml-2 text-left text-s">anciens meubles<br></br>pour une nouvelle vie</h1>
            </div>
           
            <div class='flex flex-row items-center my-8 border-2 border-violet-400 hover:border-violet-700 focus:outline-none rounded-full px-1  '>
                <form>
                    <input type = "search" placeholder= " rechercher" class = "w-50 focus:outline-none" ></input>
                    <button type='submit' class= "w-8 h-8 bg-violet-400 rounded-full hover:bg-violet-700 focus:outline-none">🔍</button>                </form>
            </div>
           
            <div class='flex flex-row items-center mt-4 gap-4'>
                <button type="submit" class="mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Mon Compte</button>
                <BtnCart/>
            </div>
        </div>
    )
};

export default Header;