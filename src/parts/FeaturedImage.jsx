import React from "react";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? "column-4" : "column-8"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img
                    className="img-cover"
                    src={`https://admin-bwamern.herokuapp.com/${item.imageUrl}`}
                    alt={item._id}
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
