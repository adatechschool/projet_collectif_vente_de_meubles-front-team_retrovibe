import {useState, useEffect} from "react";
import axios from "axios";

function Searchbar() {
  /* Cette ligne utilise le hook useState pour initialiser la variable meubles à un tableau vide. 
  Elle crée également la fonction setMeubles, qui peut être appelée pour mettre à jour la valeur de meubles.*/
    const [meubles, setMeubles] = useState([]);

  /* Cette ligne utilise le hook useState pour initialiser la variable searchTerm à une chaîne de caractères vide. 
  Elle crée également la fonction setSearchTerm, qui peut être appelée pour mettre à jour la valeur de searchTerm.*/
    const [searchTerm, setSearchTerm] = useState("");

  /* Cette ligne utilise le hook useEffect pour exécuter une fonction lorsque le composant est monté pour la première fois. 
  Dans ce cas, il envoie une requête HTTP GET à l'URL 'https://retrovibe.herokuapp.com/api/meubles' à l'aide de la bibliothèque 
  axios, récupère les données de la réponse et stocke ces données dans l'état meubles en utilisant la méthode setMeubles. 
  La chaîne vide [] est utilisée pour indiquer que la fonction ne doit être exécutée qu'une seule fois lors du montage du composant.*/
useEffect(() => {
    axios.get('https://retrovibe.herokuapp.com/api/meubles')
         .then(response => {
           setMeubles(response.data);
         })
         .catch(error => {
           console.log(error);
         });
     }, []);

  /* Cette  fonction nommée handleSearchTerm est appelée lorsque l'utilisateur saisit une recherche dans 
  la barre de recherche. La fonction reçoit un événement e en argument (la valeur de l'entrée de la barre de recherche). 
  La fonction met à jour la variable searchTerm en utilisant la méthode setSearchTerm en lui passant la valeur stockée dans la 
  variable value, pour refléter la nouvelle valeur de l'entrée de la barre de recherche. Cette mise à jour de l'état déclenche 
  un nouveau rendu du composant React qui utilise cette variable d'état et permet à l'interface utilisateur de réagir à la nouvelle 
  valeur de la barre de recherche.*/
const handleSearchTerm = (e) => {

  /* Cette ligne extrait la valeur saisie par l'utilisateur dans la barre de recherche. Plus précisément, elle utilise l'objet 
  événement e qui est passé en tant qu'argument à la fonction handleSearchTerm, puis accède à la propriété target de cet objet, 
  qui représente l'élément HTML qui a déclenché l'événement. Ensuite, elle accède à la propriété value de cet élément, qui contient 
  la valeur actuelle de l'élément (dans ce cas, la valeur saisie dans la barre de recherche). La valeur est ensuite stockée dans la 
  variable value pour une utilisation ultérieure, comme par exemple la mise à jour de l'état du composant React en réponse à la 
  saisie de l'utilisateur.*/
    let value = e.target.value;
    setSearchTerm(value);
    }
  ;

  /* AJOUTER LA LISTE DES MEUBLES RECHERCHES DANS LE LOCALSTORAGE
  /* Cette fonction nommée handleClick prend un argument id et s'exécute lorsqu'un événement de clic est déclenché sur 
  un élément associé à cette fonction. Tout d'abord, la fonction récupère les données du tableau 'favoris' à partir du localStorage. 
  Cette donnée est initialement stockée sous forme de chaîne de caractères, c'est pourquoi JSON.parse() est utilisé pour la convertir 
  en tableau. Si cette donnée n'est pas présente dans le local storage, la valeur par défaut d'un tableau vide est affectée à la 
  variable favoris. */
  const handleClick = (id) => {
    let favoris = JSON.parse(localStorage.getItem('favoris')) || [];

    /* Ensuite, la fonction ajoute l'ID passé en paramètre à la variable favoris en utilisant la méthode push(). Cela permet 
    d'ajouter l'ID du meuble à la liste des favoris.*/
    favoris.push(id);

    /* J'utilise la méthode localStorage.setItem() pour stocker la nouvelle valeur de favoris dans le localStorage. Cette 
    méthode prend deux arguments : la clé à utiliser pour stocker la valeur et la valeur elle-même. Dans ce cas, la clé est 
    'favoris' et la valeur est la variable favoris, convertie en chaîne de caractères à l'aide de la méthode JSON.stringify().*/
    localStorage.setItem('favoris', JSON.stringify(favoris));
    console.log('favoris', favoris);
  };

    return (
      <div className="w-full">
          <div>
            <form className='px-2 py-1 border-2 border-violet-400 transition-all duration-1000 hover:border-violet-700 focus:outline-none rounded-full '>
                <input 
                type = "search"
                placeholder= "Rechercher..."
                // l'attribut onChange est défini pour appeler la fonction handleSearchTerm en cas de modification de la saisie.
                onChange={handleSearchTerm}
                className = "w-full focus:outline-none" >
                </input>
            </form>
         <div className="w-full absolute top-10 flex flex-col" >
              {
              meubles 
              /* méthode filter() pour sélectionner les éléments du tableau meubles qui correspondent au critère de recherche saisi 
              par l'utilisateur. La méthode toLowerCase() est utilisée pour rendre la recherche insensible à la casse.*/
                .filter((val) => {
                    return val.nom.toLowerCase().includes(searchTerm.toLowerCase());
              })
              /* méthode map() sur le tableau filtré pour créer un nouvel élément pour chaque élément correspondant.*/
              .map((val) => {
                // vérifie que l'utilisateur a entré au moins deux caractères pour éviter de renvoyer trop de résultats inutiles.
                if (searchTerm.length>=2){
                  return (
                      <div key={val.id}>
                        {/* Crée un lien qui pointe vers la page du produit spécifié par l'ID et qui déclenche la fonction 
                        handleClick lorsqu'il est cliqué. */}
                          <a href={`/product/${val.id}`} onClick={() => handleClick(val.id)}>

                        {/* Crée un paragraphe qui affiche le nom du meuble correspondant. */}
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