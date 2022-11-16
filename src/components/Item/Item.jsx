import { useEffect } from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link to = {`detail/${product.id}`}>
      <div>
        <h2>{product.title}</h2>
        <h3>{product.category}</h3>
      </div>
    </Link>
  );
};

export default Item;