import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PokemonHeader from "../Pokemonheader";
import PokemonType from "../PokemonType";
import Moves from "../Moves";
import TypeEffectiveness from "../TypeEffectiveness";

const INITIAL_POKEMON_STATE = {
  id: "",
  name: "",
  type: {
    typeOne: "",
    typeTwo: "",
  },
  frontDefault: "",
  frontShiny: "",
  moves: [],
  typeUrl: "",
};

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(INITIAL_POKEMON_STATE);
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPokemon((prev) => ({
          ...prev,
          id: data.id,
          name: data.name,
          type: {
            typeOne:
              data.types && data.types.length > 0
                ? data.types[0].type.name
                : "",
            typeTwo:
              data.types && data.types.length > 1
                ? data.types[1].type.name
                : "",
          },
          frontDefault:
            data.sprites?.other["official-artwork"]?.front_default || "",
          frontShiny:
            data.sprites?.other["official-artwork"]?.front_shiny || "",
          moves: data.moves,
          typeUrl:
            data.types && data.types.length > 0 ? data.types[0].type.url : "",
        }));
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="pokemon-page-wrapper">
      <div className="top-container">
        <PokemonHeader
          id={pokemon?.id}
          name={pokemon?.name}
          frontDefault={pokemon?.frontDefault}
          frontShiny={pokemon?.frontShiny}
        />
      </div>

      <div className="info-container">
        <div className="left-container">
          <TypeEffectiveness typeUrl={pokemon?.typeUrl} />
        </div>

        <div className="right-container">
          {/* <TypeEffectiveness typeUrl={pokemon?.typeUrl} /> */}
          <PokemonType
            typeOne={pokemon?.type.typeOne}
            typeTwo={pokemon?.type.typeTwo}
          />
          <Moves moves={pokemon?.moves} />
        </div>
      </div>
    </div>
  );
}
