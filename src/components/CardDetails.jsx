import React from "react";

const CardDetails = ({ data }) => {
  return (
    <div className="card-details">
      <div className="group">
        <p>Type: {data.types[0].type.name}</p>
        <p>HP: {data.stats[0].base_stat}</p>
        <p>Attack: {data.stats[1].base_stat}</p>
        <p>Defense: {data.stats[2].base_stat}</p>
      </div>

      <div className="group">
        <strong>
          <br />
          Abilities:
        </strong>
        <ul>
          <li>{data.abilities[0].ability.name}</li>
          <li>{data.abilities[1].ability.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardDetails;
