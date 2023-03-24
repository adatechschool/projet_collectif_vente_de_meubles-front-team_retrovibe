/* page 5 de la maquette */
import React, {useEffect, useState} from "react";
import axios from 'axios';
import ClearCartButton from '../Composants/ClearCartButton';
import ClearCartButtonByOne from '../Composants/ClearCartButtonByOne';




function Cart() {
    const [meubles, setMeubles] = useState([]);

    useEffect(() => {
        const loadMeubles = async () => {

            // je récupère mon tableau contenant les ID des meubles cliqués de mon localStorage
        
            let meubleId = JSON.parse(localStorage.getItem('cart'));
    
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

    // je calcule mon total prix des articles
    const total = meubles.reduce((acc, meuble) => acc + parseInt(meuble.prix), 0);

    // petite fonction en ternaire pour afficher le nombre d'articles.
    function getArticleString(meubles) {
        const count = meubles.length;
        return count === 0 ? "Votre panier est vide 😕" : `Votre panier contient ${count} article${count > 1 ? "s 😄" : " 😏"}`;
      }
      

    return (

    <div className="flex flex-row mx-60 py-20 relative">
        <div className="w-8/12 flex flex-col"> 
            <h2 className="text-3xl text-candlelight-500 font-bold ml-24">{getArticleString(meubles)}</h2>
        <div class="mt-2 ml-24"><ClearCartButton /></div>
            

            {meubles.map((meuble, index) => (
            <div className="w-3/4 flex flex-col p-4 ml-20" key={meuble.id} id={meuble.id}>
                <h2 className="text-xl text-violet-400 font-bold mb-4 ml-2">Article n°{index + 1}</h2>
                <div className="flex items-center bg-white p-2 border-2 border-candlelight-500 rounded-md mb-4 shadow-lg h-48 justify-between">
                    <div className="flex flex-row justify-evenly items-center">
                        <div className="w-1/5 h-4/6 rounded-lg overflow-hidden shadow-md hover:scale-110 transition duration-700 ease-in-out">
                         <a href={`/product/${meuble.id}`}>
                            <img className="rounded-lg shadow-md" src={meuble.photo_1} alt="visuel principal de l'article"></img>
                         </a>
                        </div>
                        <div class = "flex flex-col">
                            <p className="text-ms font-normal">{meuble.nom}</p>
                            <div class = "flex flew-row ">
                                <p className="mb-2 text-xs italic font-light">{meuble.type}</p>
                            </div>
                            <p class = "font-bold text-lg mt-7">{meuble.prix} <span className="font-normal">€TTC</span></p>
                        </div>
                                <div>
                                    <ClearCartButtonByOne indexMeuble={index}/>
                                </div>
                    </div>

                </div>
            </div>
            ))}  
        </div>


        <div className=" relative">
            <div className="bg-white rounded-md p-4 border-2 border-violet-400 shadow-lg sticky top-40 bottom-48">
                <p className="font-bold mt-6 text-lg mx-16">Récapitulatif de commande</p>
                <div className="flex flex-col my-8 justify-around mx-14">

                {meubles.map((meuble, index) => (
                    <div className="flex justify-between">
                        <p className="tracking-wide text-xs">Article n°{index + 1}</p>
                        <div className="flex flex-row gap-3">
                            <p className="font-extrabold tracking-wide ">{meuble.prix}</p>
                            <p className="tracking-wide font-normal">€TTC</p>
                        </div>
                    </div>
                    ))}
                    <div class="content-none h-px bg-black inset-y-0 my-8 mx-10"></div>
                    <div className="flex justify-between">
                        <p className="tracking-wide text-xs">Livraison</p>
                        <div className="flex flex-row gap-3">
                            <p className="font-extrabold tracking-wide ">{meubles.length * 10}</p>
                            <p className="tracking-wide font-normal">€TTC</p>
                        </div>
                        </div>  

                    <div class="content-none h-px bg-black inset-y-0 my-8 mx-10"/>
                    <div className="flex justify-between">
                        <p className="font-bold tracking-wide text-lg">Total</p>
                        <div className="flex flex-row gap-3">
                            <p className="font-extrabold tracking-wide ">{total + (meubles.length * 10)} </p>
                            <p className="tracking-wide font-normal">€TTC</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
   
    )   
}
     
export default Cart;