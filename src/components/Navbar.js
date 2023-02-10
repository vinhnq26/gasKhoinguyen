import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const Navbar = () => {
  const [profile, setProfile] = useState("");
  const clientId =
    "746537720400-on1e0j856ksf0h76k3n216bo4olb15f7.apps.googleusercontent.com";
  const clientSecret = "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";
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
      alert("Login successed", "success");
      return true;
    } else {
      alert("Login information is incorrect", "error");
      // document.body.classList.remove('body_login_page');
      return false;
    }
  };

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
            <br />
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
      <Link className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i class="fas fa-motorcycle"></i>
          </span>
          Giao hàng miễn phí tận nơi. <br />
          Sẵn sàn phục vụ mọi nơi tại huyện Thạnh Phú .
        </ButtonContainer>
      </Link>
      {profile?.email ? (
        <div className="">
          <span> Welcome {profile?.email}</span>
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
      )}
    </NavWrapper>
  );
};

export default Navbar;
const NavWrapper = styled.nav`
  background-color: #a8d762;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;
