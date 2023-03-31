import React from 'react';
import logo from './logo-retrovibe.png';
import CartButtonPage from './CartButtonPage';
import Searchbar from './Searchbar';
import LogOutButton from './LogOutButton';
/* sm:w-auto */

function Header() {
    return(

        <div className = "sm:px-20 px-5 bg-white flex flex-row items-center justify-between shadow-md sticky top-0 z-10">
            <div className='w-1/12 min-w-[60px] p-2'>
                <a href="/home">
                <img src = {logo} className ="" alt= "logo de notre site Retrovibe" />
                </a>
            </div>
            <div className='relative w-[80%] max-w-[250px]'>
                <Searchbar/>
            </div>
            <div>
                <div className='flex font-medium text-sm text-center'> 
                {localStorage.getItem('Id_ConnectedUser') 
                ? <LogOutButton/> 
                : <a href="/MonCompte">
                    <button type="submit" className="sm:w-32 sm:h-12 sm:m-2 w-24 h-7 m-1 text-white bg-violet-400 transition-all duration-500 hover:bg-violet-700 rounded-lg focus:outline-none hover:scale-110 ease-in-out">Mon Compte</button>
                  </a> }
                <CartButtonPage/>
                </div>
            </div>
        </div>
    )
};

export default Header;