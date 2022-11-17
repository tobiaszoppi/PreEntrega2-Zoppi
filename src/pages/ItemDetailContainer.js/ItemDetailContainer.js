import { useParams } from 'react-router-dom'
import { data } from '../../pages/data/data.js'


const ItemDetailContainer = () => {
  const [items, setItems] = useState([])
  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      res(data)
    }, 2000)
  })
  useEffect(() => {
    getProducts.then(res => setItems(res))
  }, [])

  const id = useParams().id
  console.log(id)
 // por id mostrar detalles de producto
  return (
    <div>
      <ItemList items={items}></ItemList>
    </div>
  )
}

export default ItemDetailContainer
