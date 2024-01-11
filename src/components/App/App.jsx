import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Preloader from '../Preloader/Preloader';
import ImagePopup from '../ImagePopup/ImagePopup';
import fetchCards from '../../store/reducers/cardsQuery';

const App = () => {
  const isLoading = useSelector(state => state.cards.isLoading);
  const [largerImage, setLargerImage] = useState('');

  const dispatch = useDispatch();

  const handleImageClick = (image) => {
    setLargerImage(image);
  };

  const closePopup = () => {
    setLargerImage('');
  };

  useEffect(() => {
    console.log('Elecard CW Challenge');
    dispatch(fetchCards());
  }, []);

  return (
    <>
      <Header />
      {isLoading
        ? <Preloader size="large" />
        : <Main onImageClick={handleImageClick} />}
      <Footer />
      <ImagePopup image={largerImage} onClose={closePopup} />
    </>
  );
};

export default App;
