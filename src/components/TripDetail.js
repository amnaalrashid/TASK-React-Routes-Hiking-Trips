import React from "react";
import { useParams, Navigate } from "react-router-dom";
import tripsData from "../tripsData";

function TripDetail() {
  const { tripId } = useParams();
  const trip = tripsData.find((trip) => trip.id === parseInt(tripId, 10));

  if (!trip) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center text-uppercase mb-0">{trip.name}</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <img
            className="img-fluid rounded mb-5"
            src={trip.img}
            alt={trip.name}
          />
          <p className="mb-4">
            City: {trip.city}
            <br />
            Length: {trip.length1}Km
            <br />
            Rating: {trip.rating}
            <br />
            Difficulty: {trip.difficulty}
            <br />
            Details: {trip.details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
