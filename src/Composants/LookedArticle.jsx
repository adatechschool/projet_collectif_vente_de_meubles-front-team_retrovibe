import React, {useEffect, useState} from "react";
import BtnCart from "../Composants/BtnCart";
import axios from 'axios';

function LookedArticle() {
    const [meubles, setMeubles] = useState([]);

    useEffect(() => {
        const loadMeubles = async () => {

            // je récupère mon tableau contenant les ID des meubles cliqués de mon localStorage
        
            let meubleId = JSON.parse(localStorage.getItem('favoris'));
    
            let tmpMeubles = [];

            // je passe les ID un par un à mon axios
            for(let i = 0; i < meubleId.length; i++) {
                const response = await axios.get(`https://retrovibe.herokuapp.com/api/meubles/${meubleId[i]}`);

                // je push mes objets meubles récupérés dans un nouveau tableau
                tmpMeubles.push(response.data);
            }
            setMeubles(tmpMeubles);
        }
        loadMeubles();
        
    }, []);


     return (
      <div className="">
         <div className= "sm:mx-40 flex flex-col sm:flex-row sm:flex-wrap justify-between ">
          
            {meubles.map((meuble, index) => (
            <div id="articleHome" className="grow rounded-lg m-8 sm:mx-4 sm:my-8 sm:w-[30%] sm:min-w-[300px] sm:max-w-[30%]" key={index}>

                {/* j'ajoute dans mon adresse mon id du meuble */}
                <a href={`/product/${meuble.id}`}>
                     <img className="w-full rounded-lg shadow-md border-2 border-candlelight-500" src={meuble.photo_1} alt="visuel principal de l'article"></img>
                 </a>
                 <div className= "w-full m-4">
                     <p className="text-ms font-light">{meuble.nom}</p>
                     <p className="text-xs font-extralight italic">{meuble.type}</p>
                  </div>
                  <div className='w-full hover:scale-110 transition duration-700 ease-in-out '>
                      <BtnCart meubleId={meuble.id} meublePrix={meuble.prix} />
                 </div> 
            </div>
           ))}
         </div>
        </div>
       );
     }

export default LookedArticle;