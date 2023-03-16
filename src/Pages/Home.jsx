/* page 3 de la maquette */

import React from "react";
import lampe from "../lampe.JPG";
import canape from "../canape.JPG";
import BtnCart from "../Composants/BtnCart";

function Home() {
    return (
        <div class="w-full pl-60 pr-60">
            <div class = "mt-20 grid grid-cols-4 gap-3 justify-self-center ">
                <div id="articleHome" class="z-0 file:relative justify-self-center">
                    <div class='absolute bottom-12 right-5'>                 
                        <BtnCart/>
                    </div> 
                    <img src={lampe} class="w-64 h-64 object-cover rounded-lg "></img>
                    <div class= "m-4">
                        <h3> Titre article</h3>
                        <p class="text-xs"> Catégorie artice</p>
                        <p class="text-xl"> Prix </p>
                    </div>
                </div>
                <div id="articleHome" class="z-0 file:relative justify-self-center">
                    <div class='absolute bottom-12 right-5'>                 
                        <BtnCart/>
                    </div> 
                    <img src={lampe} class="w-64 h-64 object-cover rounded-lg "></img>
                    <div class= "m-4">
                        <h3> Titre article</h3>
                        <p class="text-xs"> Catégorie artice</p>
                        <p class="text-xl"> Prix </p>
                    </div>
                </div>
                <div id="articleHome" class="z-0 file:relative justify-self-center">
                    <div class='absolute bottom-12 right-5'>                 
                        <BtnCart/>
                    </div> 
                    <img src={lampe} class="w-64 h-64 object-cover rounded-lg "></img>
                    <div class= "m-4">
                        <h3> Titre article</h3>
                        <p class="text-xs"> Catégorie artice</p>
                        <p class="text-xl"> Prix </p>
                    </div>
                </div>
                <div id="articleHome" class="z-0 file:relative justify-self-center">
                    <div class='absolute bottom-12 right-5'>                 
                        <BtnCart/>
                    </div> 
                    <img src={lampe} class="w-64 h-64 object-cover rounded-lg "></img>
                    <div class= "m-4">
                        <h3> Titre article</h3>
                        <p class="text-xs"> Catégorie artice</p>
                        <p class="text-xl"> Prix </p>
                    </div>
                </div>
                <div id="articleHome" class="z-0 file:relative justify-self-center">
                    <div class='absolute bottom-12 right-5'>                 
                        <BtnCart/>
                    </div> 
                    <img src={lampe} class="w-64 h-64 object-cover rounded-lg "></img>
                    <div class= "m-4">
                        <h3> Titre article</h3>
                        <p class="text-xs"> Catégorie artice</p>
                        <p class="text-xl"> Prix </p>
                    </div>
                </div>
                <div id="articleHome" class="z-0 file:relative justify-self-center">
                    <div class='absolute bottom-12 right-5'>                 
                        <BtnCart/>
                    </div> 
                    <img src={lampe} class="w-64 h-64 object-cover rounded-lg "></img>
                    <div class= "m-4">
                        <h3> Titre article</h3>
                        <p class="text-xs"> Catégorie artice</p>
                        <p class="text-xl"> Prix </p>
                    </div>
                </div>
            </div>
        </div>
)}

export default Home;