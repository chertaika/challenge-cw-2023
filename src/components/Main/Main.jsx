import './Main.scss';
import { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import CardTree from '../CardTree/CardTree';
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher';
import { CARDS_TYPE, TREE_TYPE } from '../../utils/constants';

const Main = ({ cards, onImageClick }) => {
  const [treeData, setTreeData] = useState({});
  const [displayType, setDisplayType] = useState(localStorage.getItem('displayType') ?? CARDS_TYPE);

  const transformDataForTree = () => {
    const transformData = cards.reduce((acc, current) => {
      (acc[current.category] = acc[current.category] || []).push(current);
      return acc;
    }, {});
    setTreeData(transformData);
  };

  const changeDisplayType = (type) => {
    localStorage.setItem('displayType', type);
    setDisplayType(type);
  };

  useEffect(() => {
    if (displayType === TREE_TYPE) {
      transformDataForTree();
    }
  }, [displayType]);

  return (
    <main className="main">
      <ViewSwitcher onChange={changeDisplayType} activeRadio={displayType} />
      {displayType === CARDS_TYPE
        ? <CardList cards={cards} />
        : <CardTree cards={treeData} onImageClick={onImageClick} />}
    </main>
  );
};

export default Main;
