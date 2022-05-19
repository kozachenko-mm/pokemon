import React from 'react';
import { PockemonDetails } from '../pokemon-details';
import { PokemonList } from '../pokemon-list';

export const Main = () => {
  return (
    <main className="main">
      <div className="flex">
        <PokemonList />
        <PockemonDetails />
      </div>
    </main>
  );
};
