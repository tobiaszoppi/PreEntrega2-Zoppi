import { Link } from 'react-router-dom'
import { data } from '../../data/data'
import '../../CSS/style.css'

const ItemDetailContainer = () => {
  return (
    <div className='vision'>
      <div className='titulo'>
        <h3>Productos</h3>
      </div>
      { data && data.map(data => {
        return (
          <div className='box' key={ data.id }>
            {data.nombre} <br></br>
            {data.tipo} <br></br>
          </div>
        )
      })}
    </div>
  )
}

export default ItemDetailContainer
