import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { data } from "../../data/data";

const ItemDetailContainer = ({ product }) => {
    return (
      <div>
        <h1>{product.name}</h1>
        <img src="{product.img}" alt=""></img>
        {/* <h3>{product.price}</h3> */}
      </div>
    )
  }
  
  export default ItemDetailContainer