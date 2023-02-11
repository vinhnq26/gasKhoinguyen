import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <strong className="text-blue">Các Loại Bếp gas Và Phụ Kiện Khác</strong>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/listbepgas" className="ml-auto" onClick={handleClose} >
          <span className="mr-2" style={{ marginLeft: "5px" }}>
            <i className=" fa fa-shopping-cart"></i>
          </span>
          Bếp gas và bếp khè
        </Link>
        <br />
        <Link id='scroll' to="/listbepgas" className="ml-auto" onClick={handleClose}>
          <span className="mr-2" style={{ marginLeft: "5px" }}>
            <i className=" fa fa-check"></i>
          </span>
          Cho thuê bếp khè công nghiệp
        </Link>
        <br />
        <Link to="/" className="ml-auto" onClick={handleClose}>
          <span className="mr-2" style={{ marginLeft: "5px" }}>
            <i className="fa fa-fire" aria-hidden="true"></i>
          </span>
          Gas
        </Link>
      </Menu>
      {/* <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}>
      <strong className="text-blue">Thanh toán online</strong>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
      >
        <Link  className="ml-auto" onClick={handleClose2}>
            <span className="mr-2" style={{marginLeft:"5px"}}  >
            <i className="fas fa-money-check-alt"></i>
            </span>
          MOMO:0332350536
           
        </Link>
        <br/>
        <Link  className="ml-auto" onClick={handleClose2} >
            <span className="mr-2" style={{marginLeft:"5px"}}>
            <i className="fas fa-money-check-alt"></i>
            </span>
          BIDV:72910000118269
        </Link>
      </Menu>
    </div> */}
    </div>
  );
}
