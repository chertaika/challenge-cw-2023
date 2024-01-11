import './CardTree.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TreeList from '../TreeList/TreeList';
import TreeItem from '../TreeItem/TreeItem';
import TreeControl from '../TreeControl/TreeControl';
import transformDataForTree from '../../store/selectors/transformDataForTree';

const CardTree = ({ onImageClick }) => {
  const cards = useSelector(state => transformDataForTree(state.cards));
  const [isOpened, setIsOpened] = useState(true);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  window.addEventListener('DOMMouseScroll', evt => evt.preventDefault(), false);

  return (
    <div className="card-tree">
      <TreeControl isOpened={isOpened} onClick={handleClick} title="Категории" />
      <section className={`card-tree__list ${isOpened ? 'card-tree__list_opened' : ''}`}>
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
                  onImageClick={() => onImageClick(image)}
                />
              ))}
            </TreeList>
          ))}
      </section>
    </div>
  );
};

export default CardTree;
