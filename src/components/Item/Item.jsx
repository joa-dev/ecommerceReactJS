import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
      <div id="card">
        <div className="card">
          <img src={product.img} className="card-img-top d-flex" alt=""></img>
          <div className="card-body">
            <Link to = {`product/${product.id}`}><h5 className="card-title">{product.title}</h5></Link>
            <p className="card-text">{product.category}</p>
            <Link to = "/Cart" className="btn btn-primary">Agregar al Carrito</Link>
          </div>
        </div>
        {/* <img src={img} alt=""></img> */}
      </div>
  );
};

export default Item;