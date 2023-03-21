/* page 5 de la maquette */
import React, {useEffect, useState} from "react";
import Croix from "./croix_supp.png";
import axios from 'axios';

function Cart() {

    const [meubles, setMeubles] = useState([]);

    
    useEffect(() => {
        const loadMeubles = async () => {
        
            let meubleId = JSON.parse(localStorage.getItem('cart'));
    
            console.log("meubleId", meubleId)
            let tmpMeubles = [];
            for(let i = 0; i < meubleId.length; i++) {
                const response = await axios.get(`https://retrovibe.herokuapp.com/api/meubles/${meubleId[i]}`);
                tmpMeubles.push(response.data);
            }
            setMeubles(tmpMeubles);
        }
        loadMeubles();
        
    }, []);

    console.log("total", meubles)


    return (
        <div className="flex-column justify-center">
        {meubles.map((meuble) => (

        <div className="w-8/12 flex flex-col p-4 ml-40" key={meuble.id}>
            <h2 className="text-xl font-bold mb-4 ml-4">Panier (nb_articles)</h2>
            <div className="flex items-center bg-white p-4 rounded-md mb-4 shadow-lg h-48 ">
                <div className="flex flex-row">
                    <div className="w-1/5 h-4/6 rounded-full overflow-hidden mr-4 mt-2">
                        <img src={meuble.photo_1} alt="Visuel principal du produit" />
                    </div>
                    <div class = "flex flex-col">
                        <p className="font-bold mb-2">{meuble.nom}</p>
                        <div class = "flex flew-row">
                            <p className="mb-2">{meuble.type}</p>
                            <div>
                            <img src={Croix} alt="supprimer" className="w-10 h-10 ml-64 p-3 bg-violet-400 rounded-full"/>
                            </div>
                        </div>
                        <p class = "font-bold">{meuble.prix}</p>
                    </div>
                </div>
            </div>
            </div>
           ))} 
            </div>
    )
}
     
  

export default Cart;