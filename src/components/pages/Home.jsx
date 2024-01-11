import { useState, useEffect } from "react";
import asyncAPICall from "../../util/apiWrapper";
import PokemonCard from "../PokemonCard";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const renderPokemon = () => {
    if (!pokemon || pokemon.length === 0) {
      return null;
    }

    // Filter Pokemon based on searchTerm
    const filteredPokemon = pokemon.filter(
      (result) =>
        result.front_default &&
        result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredPokemon.map((result) => (
      <PokemonCard key={result.id} cardInfo={result} />
    ));
  };

  const renderSearchResults = () => {
    if (!pokemon || pokemon.length === 0) {
      return null;
    }

    // Filter Pokemon based on searchTerm
    const filteredPokemon = pokemon.filter(
      (result) =>
        result.front_default &&
        result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredPokemon.map((result) => (
      <PokemonCard key={result.id} cardInfo={result} />
    ));
  };

  useEffect(() => {
    asyncAPICall(
      "/pokemon",
      "GET",
      null,
      null,
      (data) => {
        setPokemon(data.pokemon);
      },
      (err) => console.error("Fetch Pokemon Error: ", err)
    );
  }, []);

  return (
    <div className="home-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      <div className="all-pokemon">
        {searchTerm && searchTerm.trim() !== ""
          ? renderSearchResults()
          : renderPokemon()}
      </div>
    </div>
  );
};

export default Home;
