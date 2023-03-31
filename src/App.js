import './App.css';
import Header  from './Composants/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Log from './Pages/Log';
import Cart from './Pages/Cart';
import MonCompte from './Pages/MonCompte';
import ConnectedAdmin from './Pages/ConnectedAdmin';
import Product from './Pages/Product';
import About from './Pages/About';
import Footer  from './Composants/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <Header/> 
    <ToastContainer/>    
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/moncompte' element={<MonCompte/>}/>
      <Route path='/connectedadmin' element={<ConnectedAdmin/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/> 
    </>
  );
}

export default App;
