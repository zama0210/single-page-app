import React, { useState, useEffect } from "react";
import classNames from "classnames";

import logo from "../Assets/mamamoo-full-logo.png";
import smallLogo from "../Assets/mamamoo-logo.png";

const Header = () => {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setFloating(true);
      } else {
        setFloating(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classNames("header", { "header--float": floating })}>
      <img className="header__logo" src={logo} alt="MAMAMOO logo" />
      <img className="header__avatar" src={smallLogo} alt="MAMAMOO avatar" />
    </div>
  );
};

export default Header;
