//react imports
import React from "react";

//router imports
import { useLocation, Link, Navigate } from "react-router-dom";

//css import
import "./card.css";

//component imports
import CardDetails from "./CardDetails";

const Card = () => {
  const location = useLocation();
  const data = location?.state?.data;

  return (
    <>
      {data ? (
        <div className="container">
          <div className={`card ${data.types[0].type.name}`}>
            <div className="name">
              <h3>
                #0{data.id}: {data.name}
              </h3>
            </div>

            <div className="card-body">
              <img
                src={data.sprites.other.dream_world.front_default}
                alt={data.name}
              />
              <CardDetails data={data} />
            </div>
          </div>
          <Link className="button" to="/">
            Go Back
          </Link>
        </div>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  );
};

export default Card;
