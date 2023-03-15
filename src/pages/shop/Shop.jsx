import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "../../styles/shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Biba's tech market</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
