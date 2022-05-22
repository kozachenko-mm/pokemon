import { TextTransformName } from '../../helpers/utils';
import { StatsType } from '../../types';

interface PropsType {
  stats: StatsType[];
}

export const PokemonStats: React.FC<PropsType> = ({ stats }) => (
    <div className="details_block">
      <h4 className="details_title">Stats:</h4>
      <ul className="details_list details_list--flex">
        {stats.map((item) => (
          <li key={item.stat.name} className="details_listItem">
            <p>
              {TextTransformName(item.stat.name)}
              :
              <span>
              &nbsp;
              {item.base_stat}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
);
