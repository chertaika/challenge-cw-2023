import './Main.scss';
import CardList from '../CardList/CardList';

const Main = ({ cards }) => (
  <main className="main">
    <CardList cards={cards} />
  </main>
);

export default Main;
