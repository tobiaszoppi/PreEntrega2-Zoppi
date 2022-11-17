import { Link } from 'react-router-dom';
import '../../CSS/style.css';
import { data } from '../../data/data.js';
import { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList'

const Productos = () => {
    const [items, setItems] = useState([])
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(data)
      }, 2000)
    })
    useEffect(() => {
      getProducts.then(res => setItems(res))
    }, [])
  // devolver productos desde datos

  return (
    <div class='vision'>
    <ItemList items={items}></ItemList>
      {ColeccionProductos?.map(Prod => (
        <div class="productosLista">
        <Link to=''>
          <span>{Prod.nombre}</span></Link>
          <Link to=''>
          <span>{Prod.tipo}</span></Link>
        </div>
      ))}
    </div>
  )
}

export default Productos
