import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import getInitialData from '../../utils/Api';
import { ERROR } from '../../utils/constants';
import Main from '../Main/Main';
import useFormatData from '../../hooks/useFormatData';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getInitialData();
        setCards(useFormatData(data));
      } catch (error) {
        console.log(`${ERROR}: ${error}`);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Main cards={cards} />
      <Footer />
    </>
  );
};

export default App;
