import './Card.scss';

const Card = ({
  image,
  title,
  date,
  filesize,
  category,
  onDelete,
  isCardDeleted,
}) => {
  const handleDeleteCard = () => {
    onDelete(image);
  };

  return (
    <article className={`card ${isCardDeleted ? 'card_deleted' : ''}`}>
      <img className="card__img" src={image} alt={title} />
      <div className="card__desc">
        <h2 className="card__title">{title}</h2>
        <p className="card__option">{`Дата: ${date}`}</p>
        <p className="card__option">{`Размер: ${filesize}`}</p>
        <p className="card__option">{`Категория: ${category}`}</p>
      </div>
      <div className="card__btn-overlay">
        <button
          className="card__delete-btn"
          type="button"
          aria-label="кнопка удаления карточки"
          onClick={handleDeleteCard}
        />
      </div>
    </article>
  );
};

export default Card;
