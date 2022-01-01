import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Loaị gas: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Tên cửa hàng: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>Giá: Do giá cả liên tục thay đổi .Vui lòng gọi cho chúng tôi để nhận được mức giá ưu đãi !</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Đia điểm đổi gas :
                  </p>
                  <p className="text-muted lead">
                    {info}
                  </p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                       Trang chủ 
                      </ButtonContainer>
                    </Link>
                    {/* <ButtonContainer cart disable={inCart?true:false} onClick={() => {
                      value.addToCart(id);
                      value.openModal(id); 
                    }}>
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer> */}
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
