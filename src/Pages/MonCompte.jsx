import React from 'react';
import { useParams } from 'react-router-dom';
import ConnectedClient from "../Pages/ConnectedClient";
import ConnectedAdmin from "../Pages/ConnectedAdmin";
import Log from "../Pages/Log";


function SendtoRightPage() {
    const idValue = localStorage.getItem('Id_ConnectedUser')
    console.log(idValue); // Selon l'id de l'utilisateur 3 pages différentes peuvent se charger
    if ( idValue == 81) {
        return ( 
            <div>
                <ConnectedAdmin/>
            </div>
        )   
    } else if (idValue == null) {
        return ( 
            <div>
                <Log/>
            </div>
        )   
    } else {
        return (
            <div>
                <ConnectedClient/>
            </div> 
        )
    }
}

export default SendtoRightPage;