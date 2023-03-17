import React, {useEffect, useState} from "react";
import axios from 'axios';

function Test() {
    const [meubles, setMeubles] = useState([]);
  
    useEffect(() => {
      axios.get('https://retrovibe.herokuapp.com/api/meubles')
        .then(response => {
          setMeubles(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    const photo = meubles.map(meuble => meuble.photo_1);
    const prix = meubles.map(meuble => meuble.prix);
    
    // localStorage.setItem('id', photo[2]);
    // var idValue = localStorage.getItem('id')
  
    return (
      <div>
        <img src={photo[0]} alt="meuble"/>
        <h2>Liste des prix:</h2>
        <ul>
          {prix.map(id => <li key={id}>{id}</li>)}
        </ul>
      </div>
    );
  }

    export default Test;




