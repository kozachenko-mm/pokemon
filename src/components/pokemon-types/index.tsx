type PropsType = { type: string };

export const PokemonType: React.FC<PropsType> = ({ type }) => (
    <li className={`${type} type-item`}>
      <span>{type}</span>
    </li>
);
