import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { useContext } from "react";
import { Context } from "./ProductContext";
import { toast } from "react-toastify";

const ProductList = () => {
  const { addToCard, setAddToCard } = useContext(Context);
  const notify = () => toast.success("Đã có sản phẩm này trong giỏ hàng .");
  const notifyAdd = () => toast.success("Thêm vào giỏ hàng thành công !!!");
  const handleAddToCard = (item) => {
    if (addToCard?.length > 0) {
      // eslint-disable-next-line no-unused-expressions
      addToCard?.map((v) => {
        if (v.id === item.id) {
          notify();
        }
      });

    }
    setAddToCard((addToCard) => [
      ...addToCard,
      { ...item, amount: 1 }, // <-- initial amount 1
    ]);
    notifyAdd();
  };
  return (
    <>
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
    </>
  );
};
export default ProductList;
