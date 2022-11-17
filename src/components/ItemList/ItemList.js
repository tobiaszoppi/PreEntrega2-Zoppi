import Item from '../item/item.js';

const ItemList = ({products}) => {
  return (
    products?.map((product) => (
        <Item product={product} ></Item>
    ))
  )
};

export default ItemList