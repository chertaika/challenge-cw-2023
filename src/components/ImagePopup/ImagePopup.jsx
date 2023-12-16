import { useEffect } from 'react';
import './ImagePopup.scss';

const ImagePopup = ({ image, onClose }) => {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') onClose();
    };
    if (image) document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [image]);

  return (
    <div
      className={`popup ${image && 'popup_opened'}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__content">
        <button
          className="popup__close-btn"
          onClick={onClose}
          type="button"
          aria-label="Закрыть всплывающее окно"
        />
        <img
          className="popup__image"
          src={image}
          alt="Имя картинки на языке страницы"
        />
      </div>
    </div>
  );
};

export default ImagePopup;
