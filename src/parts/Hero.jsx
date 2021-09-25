import React from "react";

import ImageHero from "../assets/images/img-hero.webp";
import ImageHeroFrame from "../assets/images/img-hero-frame.webp";
import IconCity from "../assets/images/icons/icon-city.svg";
import IconTraveler from "../assets/images/icons/icon-traveler.svg";
import IconTreasure from "../assets/images/icons/icon-treasure.svg";

import Button from "../components/Button";
import Stats from "./Stats";

import formatNumber from "../utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section>
      <div
        className="row align-items-center pt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-sm-6">
          <h1 className="font-weight-bold line-height-1">
            It's a Big World Out There, Go Explore!
          </h1>
          <p
            className=" font-weight-light text-gray-600 w-75 my-3"
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
            <Stats
              icon={IconTraveler}
              count={formatNumber(props.data.travelers)}
              name={"Travelers"}
            />
            <Stats
              icon={IconTreasure}
              count={formatNumber(props.data.treasures)}
              name={"Treasures"}
            />
            <Stats
              icon={IconCity}
              count={formatNumber(props.data.cities)}
              name={"Cities"}
            />
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
              src={ImageHeroFrame}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
