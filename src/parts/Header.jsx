import React from "react";

import IconText from "./IconText";

import { useLocation } from "react-router-dom";

export default function Header(props) {
  const locationNow = useLocation();
  const getNavLinkClass = (path) => {
    return locationNow.pathname === path ? "active" : "";
  };

  if (props.isCentered) {
    return (
      <header
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <nav className="container navbar navbar-expand-lg navbar-light">
          <div className="mx-auto">
            <IconText />
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <nav className="container navbar navbar-expand-lg navbar-light">
        <IconText />
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${getNavLinkClass("/")}`}>
              <a className="nav-link" type="link" href="/">
                Home
              </a>
            </li>
            <li className={`nav-item ${getNavLinkClass("/browse")}`}>
              <a className="nav-link" type="link" href="/browse">
                Browse
              </a>
            </li>
            <li className={`nav-item ${getNavLinkClass("/blog")}`}>
              <a className="nav-link" type="link" href="/blog">
                Blog
              </a>
            </li>
            <li className={`nav-item ${getNavLinkClass("/about-us")}`}>
              <a className="nav-link" type="link" href="/about-us">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
