/* page 1 de la maquette */


import React from 'react';

function connectedClient(){
    return(
    <div className="w-full pl-60 pr-60 text-center mt-20 h-screen">
        <h2 className="font-bold">Mes recherches</h2>
        <button type="submit" className="mt-10 shadow-md mb-6 text-white bg-violet-400 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">🔎 chaise rouge</button>
    </div>
    )};

export default connectedClient;