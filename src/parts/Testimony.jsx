import React from "react";
import Fade from "react-reveal/Fade";

import TestimonyAccent from "../assets/images/testimonial-landingpages-frame.jpg";

import Star from "../components/Star";
import Button from "../components/Button";

export default function Testimony({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-sm-6 d-none d-lg-block">
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={`https://admin-bwamern.herokuapp.com/${data.imageUrl}`}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimonyAccent}
                alt="Testimonial Frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </div>

          <div className="col-sm-6">
            <h2 className="h4" style={{ marginBottom: 40 }}>
              {data.name}
            </h2>
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <div>
              <h3 className="h2 font-weight-light line-height-2 my-3">
                {data.content}
              </h3>
              <span className="text-gray-500">
                {data.familyName}, {data.familyOccupation}
              </span>
            </div>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
