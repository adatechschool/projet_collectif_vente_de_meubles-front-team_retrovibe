import React from 'react'

function BtnCart() {
    return(
        <a href="/cart" className= "flex">
        <button className=" text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto m-auto px-5 py-2.5 text-center">🛒</button>
        </a>
    )
}

export default BtnCart;