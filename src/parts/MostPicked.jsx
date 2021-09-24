import React from "react";
import Fade from "react-reveal/Fade";

import Button from "../components/Button";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h3 className="h4 mb-3">Most Picked</h3>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
                <Fade bottom delay={300 * index}>
                  <div className="card card-featured">
                    <div className="tag d-none d-lg-block">
                      ${item.price}
                      <span className="font-weight-light">
                        {" "}
                        per {item.unit}
                      </span>
                    </div>

                    <figure className="img-wrapper">
                      <img
                        src={
                          item.imageId[0]
                            ? `https://admin-bwamern.herokuapp.com/${item.imageId[0].imageUrl}`
                            : ""
                        }
                        alt={item.title}
                        className="img-cover"
                      />
                    </figure>

                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`/properties/${item._id}`}
                      >
                        <p className="h6">{item.title}</p>
                      </Button>
                      <span className="d-none d-lg-block">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
