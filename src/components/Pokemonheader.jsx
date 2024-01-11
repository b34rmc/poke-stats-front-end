export default function PokemonHeader(props) {
  const { frontDefault, frontShiny, name, id } = props;

  return (
    <>
      <div className="images-container">
        <div className="pokemon-card">
          <div className="pokemon-image">
            <img src={frontDefault} alt="pokemon" />
          </div>

          <div className="pokemon-name">{name}</div>
        </div>

        <p>#{id}</p>

        <div className="pokemon-card shiny">
          <div className="pokemon-image">
            <img src={frontShiny} alt="shiny" />
          </div>

          <div className="pokemon-name">{name}</div>
        </div>
      </div>
    </>
  );
}
