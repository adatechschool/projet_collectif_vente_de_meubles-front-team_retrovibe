import './App.css';
import Connexion from './Pages/Connexion';
import Header  from './Composants/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';



function App() {
  return (
    <>
    <Header/> 
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/moncompte' element={<Connexion/>}/>
    </Routes>

    </>
  );
}

export default App;
