import { Link } from 'react-router-dom'
import { collection , getFirestore , getDocs } from 'firebase/firestore'
import '../../CSS/style.css'
import { useEffect, useState } from 'react'

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const dami = collection(db, 'items');
    const doMe = [];
    getDocs(dami).then((res) => {
      res.docs.forEach((doc) => {
        doMe.push(doc.data());
      }) 
    })

    setData(doMe);
  },[])
  return (
    <div className='vision'>
      <div className='titulo'>
        <h3>Productos</h3>
      </div>
      {data &&
        data.map(data => {
          return (
            <div>
              <div className='box'>
                {data.nombre} <br></br>
                {data.tipo} <br></br>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ItemDetailContainer
/**
 *
 */
