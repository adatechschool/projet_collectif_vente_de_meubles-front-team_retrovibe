import React, {useEffect, useState} from "react";
import BtnCart from "../Composants/BtnCart";
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
  
 
    return (
        <div classNameName= "flex gap-3 mt-20 justify-self-center">
          {meubles.map((meuble, index) => (
            <div id="articleHome" classNameName="w-1/4 rounded-lg border-4 border-mosque-400 z-0 relative justify-self-center" key={index}>
                <a href="/product">
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

    // function Cart() {

//     let meubleId = localStorage.getItem('cart');
//     console.log("meubleId", meubleId)

//     const [meuble, setMeuble] = useState([]);
//      useEffect(() => {
//         // j'ajoute mon id du meuble dans ma requête
//        axios.get(`https://retrovibe.herokuapp.com/api/meubles/${meubleId}`)
//          .then(response => {
//            setMeuble(response.data);
//          })
//          .catch(error => {
//            console.log(error);
//          });
//      }, [meubleId]);

    //  console.log("meubles", meubles)



    
        //Promise.all(
            
            // meubleId.map(id =>
            //     axios.get(`https://retrovibe.herokuapp.com/api/meubles/${id}`)
            // ).then(response => {
            //     console.log("data", response)
            //     const meublesData = response.map(res => res.data);
            //     setMeubles(meublesData);
            // })
            // .catch(error => {
            // console.log(error);
            // })
        //)


       // setMeubles(meubles => [...meubles, response.data]



    //    function Cart() {

    //     const [meubles, setMeubles] = useState([]);
    //     useEffect(() => {
            
    //         let meubleId = JSON.parse(localStorage.getItem('cart'));
    
    //         console.log("meubleId", meubleId)
    
    //         for(let i = 0; i < meubleId.length; i++) {
    //             axios.get(`https://retrovibe.herokuapp.com/api/meubles/${meubleId[i]}`)
    //             .then(response => setMeubles(meubles => [...meubles, response.data]))
    //         }
    //     }, []);
    
    // console.log("total", meubles)
    
    
    //     return (
    //         <div className="flex-column justify-center">
    //         {meubles.map((meuble, index) => (
    
    //         <div className="w-8/12 flex flex-col p-4 ml-40" key={index}>
    //             <h2 className="text-xl font-bold mb-4 ml-4">Panier (nb_articles)</h2>
    //             <div className="flex items-center bg-white p-4 rounded-md mb-4 shadow-lg h-48 ">
    //                 <div className="flex flex-row">
    //                     <div className="w-1/5 h-4/6 rounded-full overflow-hidden mr-4 mt-2">
    //                         <img src={meuble.photo_1} alt="Visuel principal du produit" />
    //                     </div>
    //                     <div class = "flex flex-col">
    //                         <p className="font-bold mb-2">{meuble.nom}</p>
    //                         <div class = "flex flew-row">
    //                             <p className="mb-2">{meuble.type}</p>
    //                             <div>
    //                             <img src={Croix} alt="supprimer" className="w-10 h-10 ml-64 p-3 bg-violet-400 rounded-full"/>
    //                             </div>
    //                         </div>
    //                         <p class = "font-bold">{meuble.prix}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             </div>
    //            ))} 
    //             </div>
    //     )
    //         }
    export default Test;

    // function Cart() {

    //   const [meubles, setMeubles] = useState([]);
    //   useEffect(() => {
    //       const fetchMeuble = async()=> {
    //           for(let i = 0; i < meubleId.length; i++) {
    //               const pouette = await axios.get(`https://retrovibe.herokuapp.com/api/meubles/${meubleId[i]}`)
    //                 .then(response => console.log(response.data));
    //                 console.log('pouette', pouette)
    //             }
    //           }
    //       let meubleId = JSON.parse(localStorage.getItem('cart'));
  
    //       console.log("meubleId", meubleId)
  
      
    //   }, []);


