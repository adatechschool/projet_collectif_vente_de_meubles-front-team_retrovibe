import {useState, useEffect} from "react";
import axios from "axios";

function SearchPage() {
    const [meubles, setMeubles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
    axios.get('https://retrovibe.herokuapp.com/api/meubles')
         .then(response => {
           setMeubles(response.data);
         })
         .catch(error => {
           console.log(error);
         });
     }, []);


const handleSearchTerm = (e) => {
    let value = e.target.value;
    value.length > 2 && 
    setSearchTerm(value);
}  ;

console.log(searchTerm)
    return (
        <>
        <div>
            <form  className='flex flex-row my-9 border-2 border-violet-400 transition-all duration-1000 hover:border-violet-700 focus:outline-none rounded-full px-1 '>
                <input 
                type = "search"
                placeholder= "Rechercher..."
                onChange={handleSearchTerm}
                className = "focus:outline-none px-4 mr-20" >
                </input>
                <button type='submit' className= "w-8 h-8 bg-violet-400 rounded-full transition-all duration-1000 hover:bg-violet-700 focus:outline-none mx-2">🔍</button>                
            </form>
        </div>
        <div className="search_results">
            {meubles
              .filter((val) => {
                return val.nom.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((val) => {
                return (
                    <div className="search_result" key={val.id}>
                        <a href={`/product/${val.id}`}>
                        {val.nom}
                        </a>
                    </div>
                );
            })}
        </div> 
        </>
)}

export default SearchPage;