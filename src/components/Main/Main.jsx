import './Main.scss';
import { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import CardTree from '../CardTree/CardTree';

const Main = ({ cards }) => {
  const [treeData, setTreeData] = useState({});
  const [isCardType, setIsCardType] = useState(true);

  const changeDisplayType = () => {
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
      <button type="button" onClick={changeDisplayType} aria-label="Кнопка" />
      {isCardType
        ? <CardList cards={cards} />
        : <CardTree cards={treeData} />}
    </main>
  );
};

export default Main;
