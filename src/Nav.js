import React, { useEffect, useState } from "react";
import "./nav.css";

const Nav = () => {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else setshow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="images/netflix.png"
        alt="hello"
        srcset=""
      />
      <img
        className="nav_avatar"
        src="images/avatar.png"
        alt="hello"
        srcset=""
      />
    </div>
  );
};

export default Nav;
