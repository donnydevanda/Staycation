import React from "react";

import TestimonyAccent from "../assets/images/img-testi-frame.webp";

import Star from "../components/Star";
import Button from "../components/Button";

export default function Testimony({ data }) {
  return (
    <section>
      <div
        className="row align-items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-sm-6 d-none d-lg-block">
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <img
              src={`https://admin-bwamern.herokuapp.com/${data.imageUrl}`}
              alt="Testimonial"
              className="img-fluid position-absolute"
              style={{ zIndex: 1, height: `100%`, width: 450 }}
            />
            <img
              src={TestimonyAccent}
              alt="Testimonial Frame"
              className="img-fluid position-absolute"
              style={{
                margin: `-30px 0 0 -30px`,
                height: `100%`,
                width: 450,
              }}
            />
          </div>
        </div>

        <div className="col-sm-6">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4}></Star>
          <h4 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h4>
          <span className="text-gray-600">
            {data.familyName}, {data.familyOccupation}
          </span>
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
  );
}
