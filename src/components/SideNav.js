import React from "react";
import { Navbar, Card, ListGroup, ListGroupItem } from "react-bootstrap";

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

  return (
    <div id="sidebar-menu">
      <Navbar className="home">
        <Card className="card">
          <Card.Body>
            <Card.Text>
              {dataMenu.map((v, i) => (
                <ListGroup variant="flush" key={i}>
                  <ListGroupItem className="list ">
                    <p
                      className="link cursor-pointer"
                      style={{ cursor: "pointer" }}
                    >
                      {v.title}
                    </p>
                  </ListGroupItem>
                </ListGroup>
              ))}
            </Card.Text>
            <div className="spaces"></div>
          </Card.Body>
        </Card>
      </Navbar>
    </div>
  );
};

export default SideNavBar;
