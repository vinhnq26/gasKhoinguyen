import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Modal } from "react-bootstrap";
// import SimpleMenu from './menu/menu.js'

const Navbar = () => {
  const [profile, setProfile] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const handleClose = () => setShowLogin(false);
  const clientId =
    "746537720400-on1e0j856ksf0h76k3n216bo4olb15f7.apps.googleusercontent.com";
  const clientSecret = "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";
  const notify = () => toast.success("Đăng nhập thành công");
  const notiError = () =>
    toast.error("🦄 Lỗi đăng nhập , Xin thử lại!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
    setProfile(JSON.parse(localStorage.getItem("profile")));
  }, []);
  const responseGoogle = (res) => {
    if (res?.profileObj) {
      localStorage.setItem("profile", JSON.stringify(res?.profileObj));
      // document.body.classList.remove('body_login_page');
      window.history.pushState({ urlPath: "/" }, "", "/");
      setProfile(JSON.parse(localStorage.getItem("profile")));
      notify();
      setShowLogin(false);
      return true;
    } else {
      notiError();
      setShowLogin(false);
      // document.body.classList.remove('body_login_page');
      return false;
    }
  };

  return (
    <>
      <DivBanner className="container">
        <button className="shopping mr-xl-4" title="Giỏ hàng của bạn">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        {profile?.email ? (
          <div className="grid">
            <span> Welcome: {profile?.email}</span>
            <ButtonContainer
              onClick={() => {
                localStorage.removeItem("profile");
                window.location.reload();
              }}
            >
              logOut
            </ButtonContainer>
          </div>
        ) : (
          <ButtonContainer onClick={() => setShowLogin(!showLogin)}>
            Đăng nhập
          </ButtonContainer>
        )}
      </DivBanner>
      <NavWrapper className="navbar navbar-expand-sm p-0 ">
        <div>
          <ToastContainer />
        </div>
        <div className="d-flex justify-content-between w-100">
          <Link to="/">
            <img src={logo} alt="store" width={300} height={300} />
            {/* Trang chủ */}
          </Link>
          <ul className="navbar-nav align-items-center">
        <li className="nav-item ">
          <Link to="/" className="nav-link">
            0942520449
            <br/>
            <span className="text-center"></span>
            <br />
            0949229321
          </Link>
        </li>
      </ul>

          {/* <div className="slowgen">
            <span className="mr-2">
              <i className="fas fa-motorcycle"></i>
            </span>
            Giao hàng miễn phí tận nơi. <br />
            Sẵn sàn phục vụ mọi nơi tại huyện Thạnh Phú .
          </div> */}
          {/* <SimpleMenu /> */}
        </div>
        <Modal
          show={showLogin}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Đăng nhập</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <GoogleLogin
              // className={className}
              clientId={clientId}
              clientSecret={clientSecret}
              buttonText="Continue with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              // isSignedIn={true}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      </NavWrapper>
    </>
  );
};

export default Navbar;
const NavWrapper = styled.nav`
  background-image:url('https://gassaigonvina.com/upload/photo/slishow-1589350391-bannermain01-6840.jpg');
  background-repeat: no-repeat;
  background-position: center;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
  .shopping {
    background-color: transparent;
    border: none;
  }
  .slowgen {
    align-items: center !important;
    display: flex;
    text-align: center;
    color: blue;
    font-size : 16px
  }
`;
const DivBanner = styled.nav`
  display: flex;
  justify-content: end;
  padding: 16px;
  .shopping {
    background-color: transparent;
    border: none;
  }
  .grid {
    display: grid;
  }
`;
