import { Link, NavLink } from 'react-router-dom'
import { data } from '../../data/data'
import '../../CSS/style.css'

const ItemListContainer = () => {
  return (
    <div>
      <div className='box'>
        <h3>Categorias</h3>
      </div>
      <div className='visionHome'>
        <NavLink to='/'>
          <h3 className='box'>Mouses</h3>
        </NavLink>
        <NavLink to='/'>
          <h3 className='box'>Teclados</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default ItemListContainer

/**
 * {data &&
        data.map(data => {
          return (
            <Link to=''>
              <div className='box' key={data.id}>
                {data.nombre} <br></br>
                {data.tipo} <br></br>
              </div>
            </Link>
          )
        })}
 */
