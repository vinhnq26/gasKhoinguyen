import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        Trang chủ
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
           0942520449
           <br/>
           0949229321
             </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Gas Khôi Nguyên Gas an toàn
             </Link>
          </li>
        </ul>
        <Link  className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
            <i class="fas fa-motorcycle"></i>
            </span>
            Giao hàng miễn phí tận nơi. <br/>
            Sẵn sàn phục vụ mọi nơi tại huyện Thạnh Phú .
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
background-color:#a8d762;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem; 
    text-transform: capitalize !important;
  } 
`;