import React, { useState, createContext } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { useContext } from "react";
import { Context } from "./ProductContext";
const Card = createContext();
const ProductList = () => {
  const [addToCard, setAddToCard] = useState([]);

  const handleAddToCard = (item) => {
    setAddToCard((addToCard) => [
      ...addToCard,
      { ...item, amount: 1 }, // <-- initial amount 1
    ]);
  };
  console.log("addToCard", addToCard);
  return (
    <>
     <Context.Provider value={addToCard}>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />
              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    return value.products.map((product) => {
                      return (
                        <Product
                          key={product.id}
                          product={product}
                          handleAddToCard={handleAddToCard}
                        />
                      );
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
        </Context.Provider>
    </>
  );
};
export const useAppContext = () => useContext(Card);
export default ProductList;
