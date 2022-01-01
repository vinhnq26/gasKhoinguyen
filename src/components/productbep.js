import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Productbep extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card" style={{height:"100%"}}>
          <ProductConsumer>
            {(value) => (
              <div className="img-container p-5"  style={{height:'100%'}}
                onClick={() => value.handleDetailbep(id)}>
                <Link to="/detailsbepgas">
                  <img src={img} alt="Productbep" className="card-img-top" />
                </Link>
                <button className="cart-btn"  >
              Gọi cho chúng tôi để được giao hàng nhanh nhất.
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-seft-center mb-0">
              {title}
            </p>
          
          </div>
          {/* <h5 className="text-blue font-italic mb-0 card-footer d-flex justify-content-between">
            Gọi cho chúng tôi để có được giá tốt nhất.
            </h5> */}
        </div>
      </ProductWrapper>
    )
  }
}

Productbep.propTypes = {
    databepgas: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
  .card {
    border-color: trasparent;
    transition: all .5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
      background: rgba(247,247,247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all .5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);  
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding : 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%); 
    transition: all .5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;