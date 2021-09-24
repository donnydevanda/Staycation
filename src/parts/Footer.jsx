import React from "react";

import Button from "../components/Button";

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
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payments">
                  Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <p className="h6 mt-2">Explore Us</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Our Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <p className="h6 mt-2">Connect Us</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.com"
                >
                  support@staycation.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+628176011117">
                  021 - 123 - 4567
                </Button>
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
