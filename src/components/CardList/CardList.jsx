import './CardList.scss';
import { useEffect, useState } from 'react';
import { BASE_URL, CARDS_PER_PAGE } from '../../utils/constants';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';

const CardList = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);

  const currentTableData = () => {
    const firstPageIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const lastPageIndex = firstPageIndex + CARDS_PER_PAGE;
    setCurrentCards(cards.slice(firstPageIndex, lastPageIndex));
  };

  useEffect(() => {
    currentTableData();
  }, [currentPage, cards]);

  return (
    <section className="card-list">
      <div className="card-list__container">
        {currentCards.map(({
          image, timestamp, filesize, category,
        }) => (
          <Card
            key={image.split('/').pop().split('.')[0]}
            image={`${BASE_URL}${image}`}
            title={image.split('/').pop().split('.')[0]}
            timestamp={new Date(timestamp).toLocaleString().replace(',', '')}
            category={category}
            filesize={(filesize / 1024).toFixed(2)}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={cards.length}
        onPageChange={page => setCurrentPage(page)}
      />
    </section>
  );
};

export default CardList;
