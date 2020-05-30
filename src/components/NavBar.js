import React from "react";
import { Media } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="whole-navbar">
      <Media>
        <img
          width={128}
          height={128}
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEXqXj838lTgQ/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=ujTY_qby_kjm_8JWTdmFDQL9YMezptARHekOwuk6UzI"
          alt="Navbar"
        />
      </Media>
      <h5>Radouane Bahi</h5>
        <a href="/">Main Page</a>
        <a href="/projects">Projects</a>
        <a href="/contactme">Contact Me</a>
    </div>
  );
};

export default NavBar;
