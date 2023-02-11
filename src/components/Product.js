import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import MyPopup from "./Popup";

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;
  const [show, setShow] = useState(false);
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card" style={{ height: "100%" }}>
        <ProductConsumer>
          {(value) => (
            <div
              className="img-container p-5"
              // onClick={() => value.handleDetail(id)}
            >
              <img src={img} alt="product" className="card-img-top" />
              <div className="d-flex cart-btn">
                <Link to="/details">
                  <button
                    title="Xem Chi Tiết"
                    onClick={() => value.handleDetail(id)}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </Link>
                <button title="Đặt Ngay" onClick={() => setShow(!show)}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
                <button title="Thêm vào giỏ hàng">
                  <FontAwesomeIcon icon={faPlusSquare} />
                </button>
              </div>
              <MyPopup
                show={show}
                setShow={setShow}
                title={title}
                price={price}
              />
            </div>
          )}
        </ProductConsumer>
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-seft-center mb-0">{title}</p>
        </div>
        <h5 className="text-blue font-italic mb-0 card-footer text-center">
          Giao hàng + Sửa chữa bếp gas miễn phí !
        </h5>
      </div>
    </ProductWrapper>
  );
};
export default Product;
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: trasparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;

    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .cart-btn > button {
    // background: var(--lightBlue);
    border: none;
  }
`;
