import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function NavComponent() {
  return (
     <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
  );
}
export default NavComponent