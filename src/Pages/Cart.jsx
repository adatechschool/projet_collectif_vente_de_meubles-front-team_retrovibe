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

    <div className="bg-violet-100 p-8 flex flex-col relative sm:flex-row sm:px-60 sm:space-x-20">
    {/* <div className="flex flex-row mx-60 py-20 relative"></div> */}
        <div className=" flex flex-col items-center sm:w-2/3 sm:items-start sm:pb-0"> 
            <h2 className=" text-center sm:text-left text-2xl text-candlelight-500 font-bold sm:py-0 sm:text-3xl sm:ml-4">{getArticleString(meubles)}</h2>
            {/* <h2 className="text-3xl text-candlelight-500 font-bold ml-24">{getArticleString(meubles)}</h2> */}
            {meubles.length >= 1 && <div className="my-4 sm:ml-4"><ClearCartButton /></div>}
        {/* <div class="mt-2 ml-24"><ClearCartButton /></div> */}
            

            {meubles.map((meuble, index) => (
            <div className="w-full flex flex-col" key={meuble.id} id={meuble.id}>
            {/* <div className="w-3/4 flex flex-col p-4" key={meuble.id} id={meuble.id}> */}
                <h2 className="text-xl text-violet-400 font-bold sm:mb-4 sm:ml-2">Article n°{index + 1}</h2>
                <div className="flex items-center bg-white p-2 border-2 border-candlelight-500 rounded-md mb-4 shadow-lg sm:h-48 justify-between">
                    <div className="flex flex-row justify-evenly items-center">
                        <div className="w-1/4 mr-1 rounded-lg overflow-hidden shadow-md hover:scale-110 transition duration-700 ease-in-out sm:w-1/5">
                        {/* <div className="w-1/5 h-4/6 rounded-lg overflow-hidden shadow-md hover:scale-110 transition duration-700 ease-in-out"> */}
                         <a href={`/product/${meuble.id}`}>
                            <img className="rounded-lg shadow-md" src={meuble.photo_1} alt="visuel principal de l'article"></img>
                         </a>
                        </div>
                        <div class = "flex flex-col">
                            <p className="text-ms font-normal sm:text-lg">{meuble.nom}</p>
                            <div class = "flex flew-row ">
                                <p className="mb-2 text-xs italic font-light sm:text-sm">{meuble.type}</p>
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


        {meubles.length >= 1 && <div className="w-fullsm:w-1/2">
            <div className="bg-white rounded-md p-8 border-2 border-violet-400 shadow-lg sm:sticky sm:top-40 ">
                <p className="font-bold text-sm text-center sm:mt-6 sm:text-xl">Récapitulatif de commande</p>
                {/* <p className="font-bold mt-6 text-lg mx-16">Récapitulatif de commande</p> */}
                <div className="flex flex-col my-8 justify-around sm:mx-14">

                {meubles.map((meuble, index) => (
                    <div className="flex justify-between">
                        <p className="tracking-wide text-xs sm:text-base sm:pt-0.5">Article n°{index + 1}</p>
                        <div className="flex flex-row sm:gap-3">
                            <p className="font-extrabold tracking-wide text-sm pr-1 sm:text-lg sm:font-bold sm:pr-0">{meuble.prix}</p>
                            <p className="tracking-wide text-sm sm:text-lg">€TTC</p>
                        </div>
                    </div>
                    ))}
                    <div class="content-none h-px bg-black inset-y-0 my-8 mx-10"></div>
                    <div className="flex justify-between">
                        <p className="tracking-wide text-xs sm:text-base">Livraison</p>
                        <div className="flex flex-row sm:gap-3">
                            <p className="font-extrabold tracking-wide text-sm pr-1 sm:text-lg sm:font-bold sm:pr-0">{meubles.length * 10}.00</p>
                            <p className="tracking-wide text-sm sm:text-lg">€TTC</p>
                        </div>
                        </div>  

                    <div class="content-none h-px bg-black inset-y-0 my-8 mx-10"/>
                    <div className="flex justify-between">
                        <p className="tracking-wide text-lg sm:text-xl">Total</p>
                        <div className="flex flex-row gap-3">
                            <p className="font-extrabold tracking-wide text-lg pr-0.5 sm:text-xl sm:pr-0">{total + (meubles.length * 10)}.00</p>
                            <p className="tracking-wide text-lg sm:text-xl">€TTC</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>}
    </div>
   
    )   
}
     
export default Cart;