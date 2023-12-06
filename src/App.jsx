import { useEffect, useState } from "react";
import "./App.css";
import Content from "./Pages/Home/Content";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [index, setIndex] = useState(6);
  const [newProducts, setNewProducts] = useState();
  const loadMore = () => {
    if (index > products.length) {
      setNewProducts(products.slice(0, products.length - 1));
    } else {
      let newIndex = index + 6;
      setNewProducts(products.slice(0, newIndex));
      setIndex(newIndex);
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setNewProducts(data.products.slice(0, 6));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Content isLoading={isLoading} loadMore={loadMore} products={newProducts} />
  );
}

export default App;
