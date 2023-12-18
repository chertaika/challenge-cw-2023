import './TreeItem.scss';
import { useState } from 'react';
import TreeControl from '../TreeControl/TreeControl';

const TreeItem = ({
  image,
  title,
  date,
  fileSize,
  onImageClick,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="tree-item">
      <TreeControl isOpened={isOpened} onClick={handleClick} title={title} />
      <div className={`tree-item__info ${isOpened ? 'tree-item__info_opened' : ''}`}>
        <div className="tree-item__props">
          <img className="tree-item__image" src={image} alt={title} onClick={onImageClick} />
          <p className="tree-item__prop">{`Дата: ${date}`}</p>
          <p className="tree-item__prop">{`Размер: ${fileSize}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TreeItem;
