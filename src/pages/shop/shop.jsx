import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

function Shop(props) {
    return (
        
          <div className="shop">
      <div className="shopTitle">
        <h1>Shop from the comfort of your home with ease!</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      </div>
            
        
    );
}

export default Shop;