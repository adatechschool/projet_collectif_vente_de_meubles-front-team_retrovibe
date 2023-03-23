import {useState, useEffect} from "react";
import axios from "axios";

function Searchbar() {
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
    setSearchTerm(value);
    }
  ;

    return (
      <div className="relative">
          <div>
            <form  className='flex flex-row mb-1 border-2 border-violet-400 transition-all duration-1000 hover:border-violet-700 focus:outline-none rounded-full px-1 '>
                <input 
                type = "search"
                placeholder= "Rechercher..."
                onChange={handleSearchTerm}
                className = "focus:outline-none px-4 mr-20" >
                </input>
            </form>
          </div>
         <div className="absolute top-8 left-0 flex">
              {
              meubles 
                .filter((val) => {
                    return val.nom.toLowerCase().includes(searchTerm.toLowerCase());
              })
              .map((val) => {
                if (searchTerm.length>=2){
                  return (
                      <div key={val.id}>
                          <a href={`/product/${val.id}`}>
                          <p className="ml-1 mb-2 text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-2 py-1.5 text-center">{val.nom}</p>
                          </a>
                      </div>
                  );}
              })}
          </div> 
      </div>
)}

export default Searchbar;