import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { MenuAlt2Icon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" className='position-sticky sticky-top'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-center ">
          <MenuAlt2Icon className="menu"></MenuAlt2Icon>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mx-auto py-3 p-sm-y-3">
            <Link
              className="fw-bold mx-5 py-4 py-lg-0 text-decoration-none text-white borders"
              to="/Home"
            >
              HOME
            </Link>
            <Link
              className="fw-bold mx-5 py-4 py-lg-0 text-decoration-none text-white borders"
              to="/Reviews"
            >
              REVIEWS
            </Link>
            <Link
              className="fw-bold mx-5 py-4 py-lg-0 text-decoration-none text-white borders"
              to="/Dashboard"
            >
              DASHBOARD
            </Link>
            <Link
              className="fw-bold mx-5 py-4 py-lg-0 text-decoration-none text-white borders"
              to="/Blogs"
            >
              BLOGS
            </Link>
            <Link
              className="fw-bold mx-5 py-4 py-lg-0 text-decoration-none text-white borders"
              to="/About"
            >
              ABOUT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
