/* page 4 de la maquette */

import React from "react";
import Inscription from "../Composants/Inscription";
import Connexion from "../Composants/Connexion";

function Log() {
 
  return (  
    <div className = "flex flex-col md:flex-row md:justify-center bg-violet-100 p-20 md:py-48 space-y-10 md:space-y-0 md:space-x-10">
      <Connexion/>
      <div className= "self-center content-none md:h-[200px] md:w-0.5 h-0.5 w-3/4 bg-violet-400"></div>
      <Inscription/>
    </div>
  )
}
export default Log;
