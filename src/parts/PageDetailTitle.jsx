import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "../components/Breadcrumb";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col d-none d-lg-block">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">{data.title}</h1>
            <p className="text-gray-400">
              {data.city} , {data.country}
            </p>
          </div>
          <div className="col d-none d-lg-block" />
        </div>
      </section>
    </Fade>
  );
}
