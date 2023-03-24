import React, {useEffect, useState} from "react";
import BtnCart from "../Composants/BtnCart";
import axios from 'axios';

function Article() {

    /* J'utilise le hook d'état "useState" pour définir une variable d'état "meubles" et une fonction "setMeubles" 
    pour mettre à jour cette variable. La valeur initiale de "meubles" est un tableau vide ([]).*/
     const [meubles, setMeubles] = useState([]);
   
   /* utilise le hook d'effet "useEffect" pour exécuter une action lorsqu'un certain événement se produit 
   (dans ce cas, lorsque le composant est monté).*/
     useEffect(() => {
   
   /* J'effectue une requête HTTP GET à l'URL spécifiée et récupère les données renvoyées. Si la requête est réussie, 
   les données renvoyées sont utilisées pour mettre à jour la variable d'état "meubles" à l'aide de la fonction "setMeubles". 
   Si la requête échoue, une erreur est affichée dans la console.*/
       axios.get('https://retrovibe.herokuapp.com/api/meubles')
         .then(response => {
           setMeubles(response.data);
         })
         .catch(error => {
           console.log(error);
         });
     }, []);
   
     /* syntaxe si je veux recup dans une variable une info précise, ici le nom de l'article.
      const nom = meubles.map(meuble => meuble.nom);*/
     
   /* Je map sur tous mes objets dans mon tableau meubles. Pour chaque élément meuble du tableau, la fonction fléchée 
   ((meuble, index) => ( est appelée et crée une div "articleHome" avec la structure qu'elle contient. 
   index est la position de l'objet dans le tableau.*/    


     return (
         <div className= "flex flex-wrap gap-x-16 gap-y-12 mt-24 justify-center">
            {meubles.map((meuble, index) => (
            <div id="articleHome" className="w-2/12 rounded-lg z-0 relative " key={index}>

                {/* j'ajoute dans mon adresse mon id du meuble */}
                <a href={`/product/${meuble.id}`}>
                     <img className="rounded-lg shadow-md border-2 border-candlelight-500 relative" src={meuble.photo_1} alt="visuel principal de l'article"></img>
                 </a>
                 
                 <div className= "ml-3 mt-4 ">
                     <p className="text-ms font-light">{meuble.nom}</p>
                     <p className="text-xs font-extralight italic">{meuble.type}</p>
                     <p className="text-lg font-bold">{meuble.prix}€</p>
                  </div>
                  <div className='ml-40 hover:scale-110 transition duration-700 ease-in-out'>                 
                      <BtnCart meubleId={meuble.id} />
                 </div> 
                
             </div>
           ))}
         </div>
       );
     }

export default Article;