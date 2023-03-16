/* page 2 de la maquette */
import React from 'react';
import BtnCart from '../Composants/BtnCart';


function Product() {
    return (
        <div class="flex flex-row justify-center items-cente gap-5 mt-16">
            <div class="w-2/5">
                <img class="rounded-lg " src="https://cdn1.vente-unique.com/thumbnails/product/444/444517/product_raw/xs/fauteuil_9488677.jpg" alt="" />
            </div>
            <div class="flex flex-col justify-between">
                <div>
                    <img class="w-32 h-32 rounded-lg" src="https://cdn1.vente-unique.com/thumbnails/product/132/132613/product_raw/xs/fauteuil_492067.jpg" alt="" />
                </div>
                <div>
                    <img class="w-32 h-32   rounded-lg" src="https://www.azurahomedesign.com/77233/fauteuil-pivotant-jazz.jpg" alt="" />
                </div>
                <div>
                    <img class="w-32 h-32  rounded-lg" src="https://www.cdiscount.com/pdt2/9/7/5/1/700x700/bai3584179057975/rw/fauteuil-coquillage-callista-velours-bleu-pieds.jpg" alt="" />
                </div>
                <div>
                    <img class="w-32 h-32  rounded-lg" src="https://cdn1.vente-unique.com/thumbnails/product/122/122449/product_raw/xs/fauteuil_488211.jpg" alt="" />
                </div>
            </div>
            <div class="shadow-lg ml-10 pl-10 pt-10 pr-10">
                <div>
                    <h1 class="text-2xl pb-4">Chaise d'écolier</h1>
                    <div class="pb-14">
                        <h1 class="text-4xl font-bold">32 <span class="text-xl font-normal ">€TCC</span></h1>
                    </div>
                </div>
                <div class="text-lg space-y-1 italic font-light">
                    <h1>categorie : </h1>
                    <h1>couleurs : </h1>
                    <h1>dimensions : </h1>
                    <h1>matieres : </h1>
                </div>
                <div class="pt-48 pl-52">
                   <BtnCart />
                </div>
            </div>
        </div>

    )
};
export default Product;