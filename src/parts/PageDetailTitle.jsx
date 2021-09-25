import React from "react";

import Breadcrumb from "../components/Breadcrumb";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section>
      <div className="row align-items-center">
        <div
          className="col d-none d-lg-block"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Breadcrumb data={breadcrumb} />
        </div>
        <div
          className="col-auto text-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className="h2">{data.title}</h1>
          <p className="text-gray-600">
            {data.city} , {data.country}
          </p>
        </div>
        <div className="col d-none d-lg-block" />
      </div>
    </section>
  );
}
