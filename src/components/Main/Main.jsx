import './Main.scss';
import { useState } from 'react';
import CardList from '../CardList/CardList';
import CardTree from '../CardTree/CardTree';
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher';
import { CARDS_TYPE } from '../../utils/constants';

const Main = ({ onImageClick }) => {
  const [displayType, setDisplayType] = useState(localStorage.getItem('displayType') ?? CARDS_TYPE);

  const changeDisplayType = (type) => {
    localStorage.setItem('displayType', type);
    setDisplayType(type);
  };

  return (
    <main className="main">
      <ViewSwitcher onChange={changeDisplayType} activeRadio={displayType} />
      {displayType === CARDS_TYPE
        ? <CardList />
        : <CardTree onImageClick={onImageClick} />}
    </main>
  );
};

export default Main;
