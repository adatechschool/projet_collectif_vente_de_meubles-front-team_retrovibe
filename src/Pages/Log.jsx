/* page 4 de la maquette */

import React from "react";
import Inscription from "../Composants/Inscription";
import Connexion from "../Composants/Connexion";

function Log() {
 
  return (  
    <div className = "md:flex justify-center md:my-48">
    <Connexion/>
    <div className= "content-none w-0.5 bg-violet-400 inset-y-0 ">
    </div>
    <Inscription/>
    </div>
  )
}
export default Log;
