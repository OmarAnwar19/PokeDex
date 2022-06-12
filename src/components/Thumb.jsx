import React from "react";

import { useNavigate } from "react-router-dom";

const Thumb = ({ data }) => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate(`/pokemon/${data.id}`, { state: { data } });
  };

  return (
    <div
      className={`thumb-card ${data.types[0].type.name}`}
      onClick={handleRoute}
    >
      <div className="thumb-info">
        <div className="number">
          <small>#0{data.id}</small>
        </div>

        <br />
        <img
          src={data.sprites.other.dream_world.front_default}
          alt={data.name}
        />

        <div className="details">
          <h3>{data.name}</h3>
          <small>Type: {data.types[0].type.name}</small>
        </div>
      </div>
    </div>
  );
};

export default Thumb;
