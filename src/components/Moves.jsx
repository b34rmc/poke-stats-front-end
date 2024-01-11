export default function Moves({ moves }) {
  const renderMoves = () => {
    // return moves.map((move, index) => {
    //   return (
    //     <div className="move" key={index}>
    //       {move.move.name}
    //     </div>
    //   );
    // });
  };

  return (
    <div className="pokemon-move-container">
      <div className="header">Moves</div>
      <div className="moves-container">{renderMoves()}</div>
    </div>
  );
}
