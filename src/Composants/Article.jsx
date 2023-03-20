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
     
     /* A REUTILISER AVEC HELDER POUR LES SESSIONS
      localStorage.setItem('id', photo[2]);
      var idValue = localStorage.getItem('id')*/
   
 
   /* Je map sur tous mes objets dans mon tableau meubles. Pour chaque élément meuble du tableau, la fonction fléchée 
   ((meuble, index) => ( est appelée et crée une div "articleHome" avec la structure qu'elle contient. 
   index est la position de l'objet dans le tableau.*/    

    // const meubleID = meubles[0].id;
    // console.log(meubles)

     return (
         <div className= "flex flex-wrap gap-3 mt-20 justify-center">
           {meubles.map((meuble, index) => (
             <div id="articleHome" className="w-1/5 rounded-lg border-4 border-mosque-400 z-0 relative" key={index}>

                {/* j'ajoute dans mon adresse mon id du meuble */}
                 <a href={`/product/${meuble.id}`}>
                     <img className="rounded-lg border-4  border-violet-400 border-solid transition-all duration-1000 hover:border-violet-700 hover:border-dotted" src={meuble.photo_1} alt="visuel principal de l'article"></img>
                 </a>
                 <div className='bottom-12 right-5'>                 
                     <BtnCart/>
                 </div> 
                 <div className= "m-4">
                     <h3>{meuble.nom}</h3>
                     <p className="text-xs">{meuble.type}</p>
                     <p className="text-xl">{meuble.prix}</p>

                 </div>
             </div>
           ))}
         </div>
       );
     }

export default Article;