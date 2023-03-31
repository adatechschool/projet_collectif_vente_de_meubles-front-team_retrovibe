import React from 'react';
import ConnectedAdmin from "../Pages/ConnectedAdmin";
import Log from "../Pages/Log";


function SendtoRightPage() {
    const idValue = localStorage.getItem('Id_ConnectedUser')
    console.log(idValue); // Selon l'id de l'utilisateur 3 pages différentes peuvent se charger
    if ( idValue === 81) {
        return ( 
            <div>
                <ConnectedAdmin/>
            </div>
        )   
    } else {
        return ( 
            <div>
                <Log/>
            </div>
        )   
    } 
}

export default SendtoRightPage;