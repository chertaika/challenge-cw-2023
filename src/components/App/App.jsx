import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import getInitialData from '../../utils/Api';
import { ERROR } from '../../utils/constants';
import Main from '../Main/Main';
import useFormatData from '../../hooks/useFormatData';
import Preloader from '../Preloader/Preloader';

const App = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
        : <Main cards={cards} />}
      <Footer />
    </>
  );
};

export default App;
