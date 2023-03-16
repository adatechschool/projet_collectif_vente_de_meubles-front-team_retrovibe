import React from 'react'
import BtnCart from "../Composants/BtnCart";

function Article() { 
    return(
    <div  id="articleHome" class="z-0 relative justify-self-center">
        <div class='absolute bottom-12 right-5'>                 
            <BtnCart/>
        </div> 
        <a href="/product">
        <img src="https://cdn1.vente-unique.com/thumbnails/product/444/444517/product_raw/xs/fauteuil_9488677.jpg" class="w-64 h-64 object-cover rounded-lg "></img>
        </a>
        <div class= "m-4">
            <h3> Titre article</h3>
            <p class="text-xs"> Catégorie artice</p>
            <p class="text-xl"> Prix </p>
        </div>
    </div>      
)
}

export default Article;