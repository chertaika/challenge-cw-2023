import './CardList.scss';
import { useEffect, useState } from 'react';
import { CARDS_PER_PAGE } from '../../utils/constants';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import ToolBar from '../ToolBar/ToolBar';

const CardList = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);
  const [deletedCard, setDeletedCard] = useState('');
  const [deletedCards, setDeletedCards] = useState(JSON.parse(localStorage.getItem('deletedCards')) ?? []);

  const deleteCard = (cardId) => {
    const hiddenCards = [...deletedCards, cardId];
    localStorage.setItem('deletedCards', JSON.stringify(hiddenCards));
    setDeletedCard(cardId);
    setTimeout(() => {
      if (currentPage > 1) {
        if (currentPage > Math.ceil((cards.length - hiddenCards.length) / CARDS_PER_PAGE)) {
          setCurrentPage(currentPage - 1);
        }
      }
      setDeletedCards(hiddenCards);
      setDeletedCard('');
    }, 450);
  };

  const resetDeletedCards = () => {
    localStorage.removeItem('deletedCards');
    setDeletedCards([]);
  };

  const currentTableData = (data = cards) => {
    const firstPageIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const lastPageIndex = firstPageIndex + CARDS_PER_PAGE;
    if (deletedCards.length) {
      const usersCards = data.filter(({ image }) => !deletedCards.includes(image));
      setCurrentCards(usersCards.slice(firstPageIndex, lastPageIndex));
      return;
    }
    setCurrentCards(data.slice(firstPageIndex, lastPageIndex));
  };

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const sortCards = (type) => {
    const sortedCards = cards.slice().sort((a, b) => (a[type] > b[type] ? 1 : -1));
    currentTableData(sortedCards);
    setCurrentPage(1);
  };

  useEffect(() => {
    currentTableData();
  }, [currentPage, cards, deletedCards]);

  return (
    <section className="card-list">
      <ToolBar onReset={resetDeletedCards} onSort={sortCards} count={deletedCards.length} />
      {cards.length > deletedCards.length
        ? (
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
        )
        : (<div className="card-list__message">Нет данных для отображения</div>)}
      <Pagination
        currentPage={currentPage}
        totalCount={cards.length - deletedCards.length}
        onPageChange={changePage}
      />
    </section>
  );
};

export default CardList;
