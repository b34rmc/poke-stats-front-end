import { Link } from "react-router-dom";

export default function PokemonCard(props) {
  return (
    <Link to={`/pokemon/${props.cardInfo.id}`}>
      <div className="pokemon-card">
        <div className="pokemon-image">
          <img src={props.cardInfo.front_default} alt="pokemon" />
        </div>
        <div className="pokemon-name">{props.cardInfo.name}</div>
      </div>
    </Link>
  );
}
