import React from "react";
import { slide as Menu } from "react-burger-menu";

const SideNavBar = () => {
  const dataMenu = [
    {
      title: "Trang chủ",
      link: "/",
    },
    {
      title: "Bình gas",
      link: "/",
    },
    {
      title: "Bếp gas",
      link: "/listbepgas",
    },
    {
      title: "Linh kiện",
      link: "/listLinhkien",
    },
  ];
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: 'white',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <div id="sidebar-menu">
      <Menu  styles={ styles }>
        {dataMenu.map((v, i) => (
         <span className="d-flex">
           <a id={v?.title} className="menu-item p-3 text-dark" href={`/`}>
            {v?.title}
          </a>
         </span>
        ))}
      </Menu>
    </div>
  );
};

export default SideNavBar;
