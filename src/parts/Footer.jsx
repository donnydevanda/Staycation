import React from "react";

import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <IconText />
            <p className="brand-tagline">
              We always make our costumer happy by providing as many choices as
              possible.
            </p>
          </div>

          <div className="col-sm-3">
            <p className="h6 mt-2">Explore</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="/register">New Account</a>
              </li>
              <li className="list-group-item">
                <a href="/properties">Start Booking</a>
              </li>
              <li className="list-group-item">
                <a href="/payments">Payments</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-3">
            <p className="h6 mt-2">Explore Us</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="/careers">Careers</a>
              </li>
              <li className="list-group-item">
                <a href="/privacy">Our Privacy</a>
              </li>
              <li className="list-group-item">
                <a href="/terms">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-3">
            <p className="h6 mt-2">Connect Us</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="mailto:support@staycation.com">
                  support@staycation.com
                </a>
              </li>
              <li className="list-group-item">
                <a href="tel:+628176011117">021 - 123 - 4567</a>
              </li>
              <li className="list-group-item">
                <span>StaycationHQ, South Jakarta.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2021 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
