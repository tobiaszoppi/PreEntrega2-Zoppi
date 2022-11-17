import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import NavComponent from './components/ClassComponent/NavComponent';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart.js';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavComponent></NavComponent>
          <Routes>
            <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='ItemDetailContainer' element={<ItemDetailContainer/>} ></Route>
            <Route path='cart' element={<Cart></Cart>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
