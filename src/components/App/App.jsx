import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import getInitialData from '../../utils/Api';
import { ERROR } from '../../utils/constants';
import Main from '../Main/Main';
import useFormatData from '../../hooks/useFormatData';
import Preloader from '../Preloader/Preloader';
import ImagePopup from '../ImagePopup/ImagePopup';

const App = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [largerImage, setLargerImage] = useState('');

  const handleImageClick = (image) => {
    setLargerImage(image);
  };

  const closePopup = () => {
    setLargerImage('');
  };

  useEffect(() => {
    console.log('Elecard CW Challenge');
    setIsLoading(false);
    (async () => {
      try {
        const data = await getInitialData();
        setCards(useFormatData(data));
      } catch (error) {
        console.log(`${ERROR}: ${error}`);
      } finally {
        setIsLoading(true);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      {!isLoading
        ? <Preloader size="large" />
        : <Main cards={cards} onImageClick={handleImageClick} />}
      <Footer />
      <ImagePopup image={largerImage} onClose={closePopup} />
    </>
  );
};

export default App;
