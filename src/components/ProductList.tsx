import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypeSelector';

import { useActions } from '../hooks/useActions';
import Card from './Card'
import '../assets/styles/style.scss'

const ProductList: React.FC = () => {
  const [toggle, setToggle] = useState(true);
  const { products, error, loading, fiteredProduct } = useTypedSelector(
    (s) => s.product
  );
  console.log("fiteredProduct", fiteredProduct);
  const { fetchProducts, sortProducts } = useActions();

  useEffect(() => {
    fetchProducts()
    sortProducts();
  }, [])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  const onClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className="product_list">
      <h1 className="">Explore</h1>
      <h3>Buy and sell digital fashion NFT art</h3>
      <button type="button" onClick={onClick} className="product_list_btn">
        {toggle ? "All goods" : "Available"}
      </button>
      {toggle && (
        <div className="home">
          {fiteredProduct.map((product) => {
            return <Card key={product.product_id} prod={product} />;
          })}
        </div>
      )}
      {!toggle && (
        <div className="home">
          {products.map((product) => {
            return <Card key={product.product_id} prod={product} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList
