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
      <div className="w-full">
          <div>
            <form className='px-2 py-1 border-2 border-violet-400 transition-all duration-1000 hover:border-violet-700 focus:outline-none rounded-full '>
                <input 
                type = "search"
                placeholder= "Rechercher..."
                onChange={handleSearchTerm}
                className = "w-full focus:outline-none" >
                </input>
            </form>
         <div className="w-full absolute top-10 flex flex-col" >
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
                          <p className="w-full py-1.5 pl-1.5 my-0.5 text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 font-medium rounded-lg text-sm text-left">{val.nom}</p>
                          </a>
                      </div>
                  );}
              })}
          </div> 
      </div>
    </div>
)}

export default Searchbar;