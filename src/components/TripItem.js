import React from "react";
import { Link } from "react-router-dom";

function TripItem({ trip }) {
  if (!trip || typeof trip !== "object") {
    console.warn("TripItem received invalid trip:", trip);
    return null;
  }

  if (!trip.id) {
    console.warn("Trip is missing id:", trip);
    return null;
  }

  return (
    <Link to={`/details/${trip.id}`} className="col-md-6 col-lg-4 mb-5">
      <div
        className="portfolio-item mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#portfolioModal1"
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        {trip.img && (
          <img className="img-fluid" src={trip.img} alt={trip.name || "Trip"} />
        )}
      </div>
    </Link>
  );
}

export default TripItem;
