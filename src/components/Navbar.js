import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import logo2 from "../logo2.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Modal } from "react-bootstrap";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import Spipner from "./Loading";
import { useContext } from "react";
import { Context } from "./ProductContext";
import { observer } from "mobx-react-lite";

// import SimpleMenu from './menu/menu.js'

const Navbar = () => {
  const [profile, setProfile] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    if (res?.profileObj) {
      localStorage.setItem("profile", JSON.stringify(res?.profileObj));
      // document.body.classList.remove('body_login_page');
      window.history.pushState({ urlPath: "/" }, "", "/");
      setProfile(JSON.parse(localStorage.getItem("profile")));
      notify();
      setShowLogin(false);
      setLoading(false);
      return true;
    } else {
      notiError();
      setShowLogin(false);
      // document.body.classList.remove('body_login_page');
      setLoading(false);
      return false;
    }
  };

  const { addToCard } = useContext(Context);

  return (
    <>
      {loading ? (
        <Spipner />
      ) : (
        <React.Fragment>
          <DivBanner className="w-100 px-xl-5 col-12 d-inline d-md-flex">
            <div className="d-flex justify-content-center col-12 col-md-7">
              <img src={logo} alt="logo" />
            </div>
            <div className="col-12 col-md-5 d-flex justify-content-center">
              <a
                href="tel:0942520449"
                className="nav-link text-dark cursor-pointer d-flex align-items-center "
              >
                <b> SĐT </b> : <span> 0942520449</span>
              </a>
              <div className="d-flex position-relative">
                <button className="shopping mr-xl-4" title="Giỏ hàng của bạn">
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
                {addToCard?.length > 0 && (
                  <div className="quantity">{addToCard?.length}</div>
                )}
              </div>
              {profile?.email ? (
                <div className="grid">
                  <b className="d-none d-md-block">Welcome: {profile?.email}</b>
                  <ButtonContainer
                    className="mt-3 mt-md-0"
                    onClick={() => {
                      localStorage.removeItem("profile");
                      window.location.reload();
                    }}
                  >
                    logOut
                  </ButtonContainer>
                  <b className="d-block d-md-none"> {profile?.email}</b>
                </div>
              ) : (
                <ButtonContainer onClick={() => setShowLogin(!showLogin)}>
                  Đăng nhập
                </ButtonContainer>
              )}
            </div>
          </DivBanner>
          <NavWrapper className="navbar navbar-expand-sm p-0 ">
            <div className="d-flex justify-content-between w-100 banner">
              <div className="d-flex mx-auto">
                <div className="slowgen">
                  <span className="mr-2 d-none d-md-block">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassLocation}
                      width={50}
                    />
                  </span>
                  <div className="d-inline">
                    <h2 className="content">
                      Chúng tôi cung cấp dịch vụ giao gas <br /> Và hỗ trợ sửa
                      chửa bếp gas miễn phí
                    </h2>
                    <small className="">Hân hạnh được phục vụ.</small>
                  </div>
                </div>
                <div className="pt-4 m-4 d-none d-md-block">
                  <img
                    src={logo2}
                    alt="logo"
                    height={260}
                    className="rounded-pill"
                  />
                </div>
              </div>
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
                <div className="d-flex justify-content-center">
                  <GoogleLogin
                    clientId={clientId}
                    clientSecret={clientSecret}
                    buttonText="Continue with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    // isSignedIn={true}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="white" onClick={handleClose}>
                  Đóng
                </Button>
              </Modal.Footer>
            </Modal>
          </NavWrapper>
        </React.Fragment>
      )}
    </>
  );
};

export default Navbar;
const NavWrapper = styled.nav`
  background-color: #d8eacc;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
  .slowgen {
    align-items: center !important;
    display: flex;
    text-align: center;
    color: black;
    font-size: 16px;
  }
  .banner {
    margin-top: 80px;
    min-height: 300px;
  }
  @media (max-width: 768px) {
    .banner {
      margin-top: 150px;
    }
  }
  .content {
    font-weight: 400;
    font-family: Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana,
      sans-serif;
    letter-spacing: -0.03125rem;
  }
`;
const DivBanner = styled.nav`
  z-index: 999;
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: end;
  padding: 24px;
  .shopping {
    background-color: transparent;
    border: none;
  }
  .quantity {
    position: absolute;
    top: 0;
    left: 10;
    background: red;
    border-radius: 50%;
    min-width: 30px;
    text-align: center;
  }
  .grid {
    display: grid;
  }
`;
