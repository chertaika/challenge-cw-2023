import './Main.scss';
import { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import CardTree from '../CardTree/CardTree';
import TypeSwitcher from '../TypeSwither/TypeSwitcher';

const Main = ({ cards, onImageClick }) => {
  const [treeData, setTreeData] = useState({});
  const [displayType, setDisplayType] = useState(localStorage.getItem('displayType') ?? '');

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
    if (displayType === 'tree') {
      transformDataForTree();
    }
  }, [displayType]);

  return (
    <main className="main">
      <TypeSwitcher onChange={changeDisplayType} activeRadio={displayType} />
      {displayType === 'card'
        ? <CardList cards={cards} />
        : <CardTree cards={treeData} onImageClick={onImageClick} />}
    </main>
  );
};

export default Main;
