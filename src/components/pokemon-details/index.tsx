import { useLayoutEffect, useRef } from 'react';
import { PokemonType, PokemonMoves, PokemonStats, PokemonLoader } from '..';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const PockemonDetails: React.FC = () => {
  const { info, error, loading } = useTypedSelector((state) => state.pokemonDetails);
  const cardRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (cardRef.current) {
    cardRef?.current.scrollIntoView()
   }
  }, [info])

  if (error) return <h2 className="error">Not found</h2>;

  return (
    <div className="details">
      {loading ? (
        <PokemonLoader />
      ) : info ? (
        <div className="card" id="card" ref={cardRef}>
          <h2 className="name">{info.name}</h2>
          <img
            src={info.sprites.front_default}
            alt={`pokemon ${info.name} avatar`}
            width="96px"
            height="96px"
            className="image"
          />
          <ul className="type-list">
            {info.types.map((item) => (
              <PokemonType key={item.type.name} type={item.type.name} />
            ))}
          </ul>
          <PokemonStats stats={info.stats} />
          <PokemonMoves moves={info.moves} />
        </div>
      ) : (
        <h2 className="no-card">Select a pokemon to see detailed information</h2>
      )}
    </div>
  );
};
