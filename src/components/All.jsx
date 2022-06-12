//react imports
import React, { useEffect, useState } from "react";

//npm imports
import axios from "axios";

//component imports
import Thumb from "./Thumb";
import Search from "./Search";

const All = () => {
  const [pokemon, setPokemon] = useState([]);
  const [load, setLoad] = useState(
    "https://pokeapi.co/api/v2/pokemon?&limit=20"
  );

  useEffect(() => {
    getAllPokemon();
  }, []);

  const getAllPokemon = async () => {
    const res = await axios(load);

    const popPokemon = async (data) => {
      data.forEach(async (entry, i) => {
        const res = await axios(entry.url);
        setPokemon((pokemon) => [...pokemon, res.data]);
      });
    };

    popPokemon(res.data.results);
    setLoad(res.data.next);
  };

  return (
    <div className="app">
      <h1>PokeDex</h1>

      <Search />

      <div className="pokemon">
        <div className="all">
          {pokemon.map((entry) => (
            <Thumb key={entry.id} data={entry} />
          ))}
        </div>
        <button className="button" onClick={() => getAllPokemon()}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default All;
