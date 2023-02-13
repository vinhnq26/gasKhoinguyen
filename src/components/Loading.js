import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
const Spipner = () => {
  return (
    <CustomSpipner className="w-100 h-100">
      <Spinner className="loading" animation="grow" variant="danger" />
    </CustomSpipner>
  );
};
export default Spipner;
const CustomSpipner = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: gray;
  z-index: 999;
  opacity: 0.5;
  overflow: hidden;
  .loading {
    top: 40%;
    left: 50%;
    z-index: 999;
    position: absolute;
  }
`;
