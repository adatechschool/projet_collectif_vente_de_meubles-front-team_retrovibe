import React from "react";
import laureline from './laureline.png';

function about (){
    return(   
        <div className="bg-violet-100 py-8 w-full flex justify-center items-center min-h-full sm:p-10">
            <div className="w-3/4">
                    <h1 className="my-8 font-bold sm:text-4xl text-3xl text-violet-700"> " Chez Retrovibe, nous aimons donner une seconde vie aux meubles et faire en sorte que chaque pièce ait une histoire à raconter."</h1>
                <div className="sm:flex sm:flex-row sm:space-x-8 sm:pb-8 ">
                        <img src={laureline} alt="Portrait de Laureline" className="sm:max-w-[200px] rounded-full object-cover my-8 sm:w-full sm:h-full sm:grow"></img>
                        <p className="my-8 sm:w-full">
                            Notre créatrice Lauréline a toujours été passionnée par la décoration intérieure et la chasse aux trésors dans les brocantes. Elle a donc décidé de faire de sa passion son métier en créant Retrovibe.
                            Après avoir commencé sa carrière dans le monde de la mode en tant que styliste, elle a travaillé pour des marques de renom et a acquis une expérience précieuse dans la recherche de tendances et la création d'ambiances. Après plusieurs années dans l'industrie de la mode, elle a décidé de se lancer dans un nouveau défi : créer sa propre entreprise de vente de meubles d'occasion.
                            <br></br>Chez Retrovibe, Lauréline met en pratique son expertise en matière de style et de design pour proposer une collection de meubles uniques et élégants. Elle sélectionne avec soin chaque pièce en fonction de son histoire, de sa qualité et de son esthétique, pour offrir à ses clients une expérience de shopping en ligne exceptionnelle.
                            <br></br>Nous croyons en la <b className="text-violet-700">durabilité</b> et en la <b className="text-violet-700">qualité</b>, et nous sommes convaincus que les meubles d'occasion peuvent apporter une touche d'<b className="text-violet-700">originalité</b> et de caractère à n'importe quel intérieur.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default about