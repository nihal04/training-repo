import React from "react";

export default function Contact({
  firstname,
  lastname,
  email,
  city,
  age,
  phone,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {firstname} {lastname}
        </h5>
        <p className="card-text">{email}</p>
        <p className="card-text">{city}</p>
        <p className="card-text">{age}</p>
        <p className="card-text">{phone}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
