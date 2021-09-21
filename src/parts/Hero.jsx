import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "../assets/images/img-hero.jpg";
import ImageHero_ from "../assets/images/img-hero-frame.jpg";
import IconCities from "../assets/images/icons/icon-cities.svg";
import IconTraveler from "../assets/images/icons/icon-traveler.svg";
import IconTreasure from "../assets/images/icons/icon-treasure.svg";

import Button from "../components/Button";

import formatNumber from "../utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-5">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h1 className="font-weight-bold line-height-1 mb-3">
              It's a Big World Out There, Go Explore!
            </h1>
            <p
              className=" font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              To get the best of your adventure you just need to leave and go
              where you like. We are waiting for you.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row mt-5">
              <div className="col-auto" style={{ marginRight: 0 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>

              <div className="col-auto" style={{ marginRight: 0 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${props.data.treasure} Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>

              <div className="col-auto" style={{ marginRight: 0 }}>
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-none d-lg-block">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
