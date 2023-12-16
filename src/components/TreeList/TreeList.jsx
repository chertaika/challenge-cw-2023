import './TreeList.scss';
import { useState } from 'react';
import TreeControl from '../TreeControl/TreeControl';

const TreeList = ({ title, children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="tree-list">
      <TreeControl isOpened={isOpened} onClick={handleClick} title={title} />
      <div className={`tree-list__items ${isOpened ? 'tree-list__items_opened' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default TreeList;
