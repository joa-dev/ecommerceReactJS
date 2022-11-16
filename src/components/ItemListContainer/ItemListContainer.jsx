import { data } from "../../data/data"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  const getProducts = new Promise ((resolve, reject) => {
    setTimeout(()=> {
      if (categoryName){
        const filteredData = data.filter((item) => {
          return item.category == categoryName;
        });
        resolve(filteredData);

      } else {
        resolve(data);
      }
    }, 1000);
  });

  useEffect(() => {
    getProducts.then((res) => {
      setItems(res);
    })
  }, [categoryName]);

  return (
    <div>
      <ItemList products={items} />
    </div>
  )
}

export default ItemListContainer;