import './CardList.scss';
import { useEffect, useState } from 'react';
import { CARDS_PER_PAGE } from '../../utils/constants';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';

const CardList = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);
  const [deletedCard, setDeletedCard] = useState('');
  const [deletedCards, setDeletedCards] = useState(JSON.parse(localStorage.getItem('deletedCards')) ?? []);

  const deleteCard = (cardId) => {
    localStorage.setItem('deletedCards', JSON.stringify([...deletedCards, cardId]));
    setDeletedCard(cardId);
    setTimeout(() => setDeletedCards([...deletedCards, cardId]), 450);
    // setDeletedCardsCards([...deletedCards, cardId]);
  };

  const currentTableData = () => {
    const firstPageIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const lastPageIndex = firstPageIndex + CARDS_PER_PAGE;
    if (deletedCards.length) {
      const usersCards = cards.filter(({ image }) => !deletedCards.includes(image));
      setCurrentCards(usersCards.slice(firstPageIndex, lastPageIndex));
      return;
    }
    setCurrentCards(cards.slice(firstPageIndex, lastPageIndex));
  };

  useEffect(() => {
    currentTableData();
  }, [currentPage, cards, deletedCards]);

  return (
    <section className="card-list">
      <div className="card-list__container">
        {currentCards.map(({
          image, title, date, humanFilesize, category,
        }) => (
          <Card
            key={image}
            image={image}
            title={title}
            date={date}
            category={category}
            filesize={humanFilesize}
            onDelete={deleteCard}
            isCardDeleted={deletedCard === image}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={cards.length - deletedCards.length}
        onPageChange={page => setCurrentPage(page)}
      />
    </section>
  );
};

export default CardList;
