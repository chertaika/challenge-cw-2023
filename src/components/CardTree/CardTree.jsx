import './CardTree.scss';
import { useState } from 'react';
import TreeList from '../TreeList/TreeList';
import TreeItem from '../TreeItem/TreeItem';
import TreeControl from '../TreeControl/TreeControl';

const CardTree = ({ cards }) => {
  const [isOpened, setIsOpened] = useState(true);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="card-tree">
      <TreeControl isOpened={isOpened} onClick={handleClick} title="Категории" />
      <div className={`card-tree__list ${isOpened ? 'card-tree__list_opened' : ''}`}>
        {Object.keys(cards)
          .map(keyName => (
            <TreeList title={keyName} key={keyName}>
              {cards[keyName].map(({
                image,
                title,
                date,
                humanFilesize,
              }) => (
                <TreeItem
                  image={image}
                  title={title}
                  date={date}
                  fileSize={humanFilesize}
                  key={title}
                />
              ))}
            </TreeList>
          ))}
      </div>
    </div>
  );
};

export default CardTree;
