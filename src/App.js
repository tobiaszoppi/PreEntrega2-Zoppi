import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import NavComponent from './components/ClassComponent/NavComponent';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import Productos from './pages/Productos/Productos';
import ItemDetailContainer from './pages/ItemDetailContainer.js/ItemDetailContainer';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavComponent></NavComponent>
          <Routes>
            <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='Productos' element={<Productos></Productos>}></Route>
            <Route path='ItemDetailContainer/:id' element={<ItemDetailContainer/>} ></Route>
            <Route path='cart' element={<Cart></Cart>}></Route>
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
