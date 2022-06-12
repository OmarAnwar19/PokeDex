//react imports
import React from "react";

//router imports
import { useNavigate } from "react-router-dom";

//npm imports
import axios from "axios";

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    const query = e.target.search.value.toLowerCase();
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then((res) => {
        navigate(`/pokemon/${query}`, { state: { data: res.data } });
      })
      .catch((err) => {
        navigate("/404");
      });
  };

  return (
    <div className="search">
      <h3>Search for a pokemon: </h3>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search.." name="search" />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Search;
