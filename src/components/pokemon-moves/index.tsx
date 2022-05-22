import { MoveType } from '../../types';

interface PropsTypes {
  moves: MoveType[];
}

export const PokemonMoves: React.FC<PropsTypes> = ({ moves }) => (
    <div className="details_block">
      <h4 className="details_title">Moves: </h4>
      <ul className=" details_list details_list--grid">
        {moves.map((item) => (
          <span key={item.move.name}>{item.move.name}</span>
        ))}
      </ul>
    </div>
);
