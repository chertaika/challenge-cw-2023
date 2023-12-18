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
    if (image) {
      document.addEventListener('keydown', handleEscClose);
      document.body.classList.add('scroll-blocked');
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.body.classList.remove('scroll-blocked');
    };
  }, [image]);

  return (
    <div
      className={`image-popup ${image && 'image-popup_opened'}`}
      onClick={handleOverlayClick}
    >
      <div className="image-popup__content">
        <button
          className="image-popup__close-btn"
          onClick={onClose}
          type="button"
          aria-label="Закрыть всплывающее окно"
        />
        <img
          className="image-popup__image"
          src={image}
          alt="Имя картинки на языке страницы"
        />
      </div>
    </div>
  );
};

export default ImagePopup;
