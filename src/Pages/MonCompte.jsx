import React, {useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SendtoRightPage() {

    // var idValue = localStorage.getItem('id')

    const [utilisateurs, setUtilisateurs] = useState([]);

    useEffect(() => {

        axios.get(`https://retrovibe.herokuapp.com/api/utilisateurs`)
        .then(response => {
        setUtilisateurs(response.data);
        })
        .catch(error => {
        console.log(error);
        });
    },[])
    console.log(utilisateurs);

    return (
        
    <div>
        <p>Ici on va seulement router vers Connexion ou Connected admin ou Connected client</p>
        {/* <p>{idValue}</p> */}
    </div>
    )
}

export default SendtoRightPage;