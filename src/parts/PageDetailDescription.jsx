import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailSescription({ data }) {
  return (
    <main>
      <h2 className="h4">About the place</h2>
      <p>{ReactHtmlParser(data.description)}</p>
      <div className="row mt-4">
        {data.featureId.length === 0
          ? "No Features"
          : data.featureId.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2"
                    src={`https://staycationserver.herokuapp.com//${feature.imageUrl}`}
                    alt={feature.name}
                  />{" "}
                  <span>{feature.quantity}</span>{" "}
                  <span className="text-gray-600 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
