import React from "react";

import Spinner from "../assets/images/icons/icon-spinner.svg";

export default function Loading() {
  return (
    <div
      className="container text-center"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <h3 style={{ marginTop: 350 }}>Please Wait ...</h3>
      <p>This site takes a little time to wake the dynos :)</p>
      <img
        className="img-fluid mx-0 my-0"
        style={{ height: 100, width: 100 }}
        src={Spinner}
        alt="Spinner Icon"
      />
    </div>
  );
}
