import { useState } from "react";
import Item from "../Item/Item";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemList = ({products}) => {
  return (
    products.map((product) => (
        <Item product={product} key={product.id}/>
        // <ItemDetailContainer product={product} key={product.id}/>
      ))
  )
};

export default ItemList