import * as icons from "./assets/icons/Icons";

export default function PokemonType({ typeOne, typeTwo }) {
  let colorOne;
  let iconOne = icons[typeOne];

  let colorTwo;
  let iconTwo;

  switch (typeOne) {
    case "bug":
      colorOne = "#92BC2C";
      iconOne = icons.bug;
      break;
    case "dark":
      colorOne = "#595761";
      iconOne = icons.dark;
      break;
    case "dragon":
      colorOne = "#0C69C8";
      iconOne = icons.dragon;
      break;
    case "electric":
      colorOne = "#F2D94E";
      iconOne = icons.electric;
      break;
    case "fairy":
      colorOne = "#EE90E6";
      iconOne = icons.fairy;
      break;
    case "fighting":
      colorOne = "#D3425F";
      iconOne = icons.fighting;
      break;
    case "fire":
      colorOne = "#FBA54C";
      iconOne = icons.fire;
      break;
    case "flying":
      colorOne = "#A1BBEC";
      iconOne = icons.flying;
      break;
    case "ghost":
      colorOne = "#5F6DBC";
      iconOne = icons.ghost;
      break;
    case "grass":
      colorOne = "#5FBD58";
      iconOne = icons.grass;
      break;
    case "ground":
      colorOne = "#DA7C4D";
      iconOne = icons.ground;
      break;
    case "ice":
      colorOne = "#75D0C1";
      iconOne = icons.ice;
      break;
    case "normal":
      colorOne = "#A0A29F";
      iconOne = icons.normal;
      break;
    case "poison":
      colorOne = "#B763CF";
      iconOne = icons.poison;
      break;
    case "psychic":
      colorOne = "#FA8581";
      iconOne = icons.psychic;
      break;
    case "rock":
      colorOne = "#C9BB8A";
      iconOne = icons.rock;
      break;
    case "steel":
      colorOne = "#5695A3";
      iconOne = icons.steel;
      break;
    case "water":
      colorOne = "#539DDF";
      iconOne = icons.water;
      break;

    default:
  }

  switch (typeTwo) {
    case "bug":
      colorTwo = "#92BC2C";
      iconTwo = icons.bug;
      break;
    case "dark":
      colorTwo = "#595761";
      iconTwo = icons.dark;
      break;
    case "dragon":
      colorTwo = "#0C69C8";
      iconTwo = icons.dragon;
      break;
    case "electric":
      colorTwo = "#F2D94E";
      iconTwo = icons.electric;
      break;
    case "fairy":
      colorTwo = "#EE90E6";
      iconTwo = icons.fairy;
      break;
    case "fighting":
      colorTwo = "#D3425F";
      iconTwo = icons.fighting;
      break;
    case "fire":
      colorTwo = "#FBA54C";
      iconTwo = icons.fire;
      break;
    case "flying":
      colorTwo = "#A1BBEC";
      iconTwo = icons.flying;
      break;
    case "ghost":
      colorTwo = "#5F6DBC";
      iconTwo = icons.ghost;
      break;
    case "grass":
      colorTwo = "#5FBD58";
      iconTwo = icons.grass;
      break;
    case "ground":
      colorTwo = "#DA7C4D";
      iconTwo = icons.ground;
      break;
    case "ice":
      colorTwo = "#75D0C1";
      iconTwo = icons.ice;
      break;
    case "normal":
      colorTwo = "#A0A29F";
      iconTwo = icons.normal;
      break;
    case "poison":
      colorTwo = "#B763CF";
      iconTwo = icons.poison;
      break;
    case "psychic":
      colorTwo = "#FA8581";
      iconTwo = icons.psychic;
      break;
    case "rock":
      colorTwo = "#C9BB8A";
      iconTwo = icons.rock;
      break;
    case "steel":
      colorTwo = "#5695A3";
      iconTwo = icons.steel;
      break;
    case "water":
      colorTwo = "#539DDF";
      iconTwo = icons.water;
      break;

    default:
  }

  return (
    <div className="pokemon-type-container">
      <div className="header">Pokemon Type</div>
      <div className="pokemon-type">
        <div className="type">
          <div className="icon" style={{ backgroundColor: `${colorOne}` }}>
            {iconOne}
          </div>
          <div className="name" style={{ backgroundColor: `${colorOne}` }}>
            {typeOne}
          </div>
        </div>
        <div className="type">
          <div className="icon" style={{ backgroundColor: `${colorTwo}` }}>
            {iconTwo}
          </div>
          <div className="name" style={{ backgroundColor: `${colorTwo}` }}>
            {typeTwo}
          </div>
        </div>
      </div>
    </div>
  );
}
