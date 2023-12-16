import './Main.scss';
import { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import CardTree from '../CardTree/CardTree';
import TypeButton from '../TypeButton/TypeButton';

const Main = ({ cards, onImageClick }) => {
  const [treeData, setTreeData] = useState({});
  const [isCardType, setIsCardType] = useState(JSON.parse(localStorage.getItem('isCardType')) ?? true);

  const changeDisplayType = () => {
    localStorage.setItem('isCardType', JSON.stringify(!isCardType));
    setIsCardType(!isCardType);
  };

  const transformDataForTree = () => {
    const transformData = cards.reduce((acc, current) => {
      (acc[current.category] = acc[current.category] || []).push(current);
      return acc;
    }, {});
    setTreeData(transformData);
  };

  useEffect(() => {
    if (!isCardType) {
      transformDataForTree();
    }
  }, [isCardType]);

  return (
    <main className="main">
      <TypeButton onChange={changeDisplayType} isChecked={isCardType} />
      {isCardType
        ? <CardList cards={cards} />
        : <CardTree cards={treeData} onImageClick={onImageClick} />}
    </main>
  );
};

export default Main;
