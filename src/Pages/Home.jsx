/* page 3 de la maquette */

import React from "react";
import Article from "../Composants/Article"

function Home() {
    return (
        <div class="w-full relative pl-60 pr-60 grow h-full">
            <div class = "mt-20 grid grid-cols-4 gap-3 justify-self-center ">
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </div>
        </div>
)}

export default Home;