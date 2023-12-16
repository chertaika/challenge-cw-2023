import './Main.scss';
import { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import CardTree from '../CardTree/CardTree';
// import TypeButton from '../TypeButton/TypeButton';
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

  // функционал для TypeButton с использованием checkbox
  // const [isCardType, setIsCardType] =
  // useState(JSON.parse(localStorage.getItem('isCardType')) ?? true);
  // const changeDisplayType = () => {
  //   localStorage.setItem('isCardType', JSON.stringify(!isCardType));
  //   setIsCardType(!isCardType);
  // };
  //
  // useEffect(() => {
  //   if (!isCardType) {
  //     transformDataForTree();
  //   }
  // }, [isCardType]);

  useEffect(() => {
    if (displayType === 'tree') {
      transformDataForTree();
    }
  }, [displayType]);

  return (
    <main className="main">
      {/* <TypeButton onChange={changeDisplayType} isChecked={isCardType} /> */}
      <TypeSwitcher onChange={changeDisplayType} activeRadio={displayType} />
      {displayType === 'card'
        ? <CardList cards={cards} />
        : <CardTree cards={treeData} onImageClick={onImageClick} />}
    </main>
  );
};

export default Main;
