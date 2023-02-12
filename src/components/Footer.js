import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4  bg-white w-100">
    <div className="text-center container text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase text-dảk">CỬA HÀNG GAS KHÔI NGUYÊN</h5>
          <p className="text-info">Chúng tôi luôn đặt an toàn lên hàng đầu !</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Hỗ trợ</h5>
          <ul className="list-unstyled ">
            <li>
              <a href="tel:0942520449" className="text-info">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Về chúng tôi</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-info">
                Đăng nhập
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-3">
      <small className="text-center mt-5">
        &copy; Copyright by Nguyen Quoc Vinh.
      </small>
      <a href="mailto:nguyenquocvinh813@gmail.com">
        <p>
          <small className="text-center mt-5 text-dark">
            nguyenquocvinh813@gmail.com
          </small>
        </p>
      </a>
    </div>
  </footer>
);

export default Footer;
