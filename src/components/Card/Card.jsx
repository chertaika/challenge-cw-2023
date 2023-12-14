import './Card.scss';

const Card = ({
  image,
  title,
  timestamp,
  filesize,
  category,
}) => (
  <article className="card">
    <img className="card__img" src={image} alt={title} />
    <div className="card__desc">
      <h2 className="card__title">{`Название: ${title}`}</h2>
      <p className="card__option">{`Дата: ${timestamp}`}</p>
      <p className="card__option">{`Размер: ${filesize} Кбайт`}</p>
      <p className="card__option">{`Категория: ${category}`}</p>
    </div>
    <button className="card__delete-btn" type="button" aria-label="кнопка удаления карточки" />
  </article>
);

export default Card;
