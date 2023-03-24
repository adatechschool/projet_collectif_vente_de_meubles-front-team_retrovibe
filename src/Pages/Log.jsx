/* page 4 de la maquette */

import React, {useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Inscription from "../Composants/Inscription";
import Connexion from "../Composants/Connexion";

function Log() {
 
  return (  
    <div className = "flex justify-center mt-32">
    <Connexion/>
    <div className= "content-none w-0.5 bg-violet-400 inset-y-0 ">
    </div>
    <Inscription/>
    </div>
  )
}
export default Log;
