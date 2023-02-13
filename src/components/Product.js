import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import MyPopup from "./Popup";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;
  const [show, setShow] = useState(false);
  const notify = () => toast.error("Bạn chưa đăng nhập.");
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 px-1">
      <div className="card shadow rounded-3" style={{ height: "100%" }}>
        <ProductConsumer>
          {(value) => (
            <div
              className="img-container p-5 "
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
                <button
                  title="Đặt Ngay"
                  onClick={() =>
                    localStorage.getItem("profile") &&
                    JSON.parse(localStorage.getItem("profile"))
                      ? setShow(!show)
                      : notify()
                  }
                >
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
        <div className="card-footer justify-content-between d-flex pb-0">
          <span className="mb-0">{title}</span>
          <p className="">
            <a href="tel:0942520449">Giá: Liên hệ</a>
          </p>
        </div>

        <small className="text-blue font-italic mb-0 card-footer text-center">
          Giao hàng & Sửa chữa bếp gas miễn phí !
        </small>
      </div>
      <span className=" spanCustom top"></span>
      <span className=" spanCustom right"></span>
      <span className=" spanCustom bottom"></span>
      <span className=" spanCustom left"></span>
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
    // border:none;
    // border-color: trasparent;
    // transition: all 0.5s linear;
  }
  .spanCustom {
    position: absolute;
    border-radius: 10vmax;
  }

  .top {
    top: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 50%,
      rgba(255, 49, 49, 0.5),
      rgb(255, 49, 49)
    );
  }

  .bottom {
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgb(57, 255, 20),
      rgba(57, 255, 20, 0.5),
      transparent 50%
    );
  }

  .right {
    top: 0;
    right: 0;
    width: 1px;
    height: 0;
    background: linear-gradient(
      180deg,
      transparent 30%,
      rgba(0, 255, 255, 0.5),
      rgb(0, 255, 255)
    );
  }

  .left {
    left: 0;
    bottom: 0;
    width: 1px;
    height: 0;
    background: linear-gradient(
      180deg,
      rgb(255, 255, 113),
      rgba(255, 255, 113, 0.5),
      transparent 70%
    );
  }

  .top {
    animation: animateTop 3s ease-in-out infinite;
  }

  .bottom {
    animation: animateBottom 3s ease-in-out infinite;
  }

  .right {
    animation: animateRight 3s ease-in-out infinite;
  }

  .left {
    animation: animateLeft 3s ease-in-out infinite;
  }

  @keyframes animateTop {
    25% {
      width: 100%;
      opacity: 1;
    }

    30%,
    100% {
      opacity: 0;
    }
  }

  @keyframes animateBottom {
    0%,
    50% {
      opacity: 0;
      width: 0;
    }

    75% {
      opacity: 1;
      width: 100%;
    }

    76%,
    100% {
      opacity: 0;
    }
  }

  @keyframes animateRight {
    0%,
    25% {
      opacity: 0;
      height: 0;
    }

    50% {
      opacity: 1;
      height: 100%;
    }

    55%,
    100% {
      height: 100%;
      opacity: 0;
    }
  }

  @keyframes animateLeft {
    0%,
    75% {
      opacity: 0;
      bottom: 0;
      height: 0;
    }

    100% {
      opacity: 1;
      height: 100%;
    }
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.2);
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
    border: none !important;
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
    border: none !important;
  }
  .cart-btn > a > button {
    // background: var(--lightBlue);
    border: none !important;
  }
`;
