/* import React from 'react';
import { useForm } from "react-hook-form";

function Searchbar() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data  => exportData(data);

  return (  
    <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register("recherche en cours")}type = "search" placeholder= "Rechercher..." className = "w-50 focus:outline-none px-4 mr-20" ></input>
        <button type='submit' className= "w-8 h-8 bg-violet-400 rounded-full transition-all duration-1000 hover:bg-violet-700 focus:outline-none mx-2">🔍</button>                
    </form>
  )
}
function exportData(newData){
    return newData
}

export default Searchbar;
 */