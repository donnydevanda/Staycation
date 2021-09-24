import React from "react";

import Button from "../components/Button";

export default function Activities({ data }) {
  if (data.length === 0) return null;

  return (
    <section className="container">
      <h3 className="h4 mb-3 font-weight-medium">Nearby Activities</h3>
      <div className="row">
        {data.map((item, index2) => {
          return (
            <div className="item col-sm-3" key={`activity-item-${index2}`}>
              <div className="card">
                {item.isPopular && (
                  <div className="tag">
                    Popular <span className="font-weight-light">Choice</span>
                  </div>
                )}
                <figure className="img-wrapper">
                  <img
                    src={
                      item.imageUrl
                        ? `https://staycationserver.herokuapp.com/${item.imageUrl}`
                        : ""
                    }
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    href={`/properties/${item._id}`}
                    className="stretched-link d-block text-gray-800"
                  >
                    <h4>{item.name}</h4>
                  </Button>
                  <span className="text-gray-500">{item.type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
