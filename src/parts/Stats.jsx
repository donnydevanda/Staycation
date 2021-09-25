import React from "react";

export default function Stats(props) {
  return (
    <div className="col-auto">
      <img
        width="36"
        height="36"
        src={props.icon}
        alt={`${props.count} ${props.name}`}
      />
      <h2 className="h6 mt-3">
        {props.count}{" "}
        <span className="text-gray-600 font-weight-light">{props.name}</span>
      </h2>
    </div>
  );
}
