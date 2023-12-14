import './CardList.scss';
import { BASE_URL } from '../../utils/constants';
import Card from '../Card/Card';

const CardList = ({ cards }) => (
  <section className="card-list">
    {cards.map(({
      image, timestamp, filesize, category,
    }) => (
      <Card
        image={`${BASE_URL}${image}`}
        title={image.split('/').pop().split('.')[0]}
        timestamp={new Date(timestamp).toLocaleString().replace(',', '')}
        category={category}
        filesize={(filesize / 1024).toFixed(2)}
      />
    ))}
  </section>
);

export default CardList;
