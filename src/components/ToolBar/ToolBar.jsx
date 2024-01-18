import './ToolBar.scss';
import { useEffect, useRef, useState } from 'react';
import { typesOfSorting } from '../../utils/constants';
import SortItem from '../SortItem/SortItem';

const ToolBar = ({ onReset, onSort, count }) => {
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);
  const [currentSorting, setCurrentSorting] = useState('');

  const sortListRef = useRef();

  const openSortOptions = () => {
    setIsOptionsOpened(true);
  };

  const closeSortOptions = () => {
    setIsOptionsOpened(false);
  };

  const handleChangeSorting = (evt) => {
    const sortValue = evt.target.value;
    onSort(sortValue);
    closeSortOptions();
    setCurrentSorting(typesOfSorting[sortValue]);
  };

  const handleOverlayClick = (evt) => {
    if (evt.target !== sortListRef.current && !sortListRef.current.contains(evt.target)) {
      closeSortOptions();
    }
  };

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        closeSortOptions();
      }
    };
    if (isOptionsOpened) {
      document.addEventListener('keydown', handleEscClose);
      document.addEventListener('mousedown', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, [isOptionsOpened]);

  return (
    <div className="toolbar">
      <div className="toolbar__sort" ref={sortListRef}>
        <div className="toolbar__sort-title" onClick={isOptionsOpened ? closeSortOptions : openSortOptions}>
          {`Сортировка${currentSorting.length ? `: ${currentSorting}` : ''}`}
          <span className={`toolbar__sort-arrow ${isOptionsOpened ? 'toolbar__sort-arrow_active' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 -4.5 20 20">
              <path d="M20 1.39 18.594 0 9.987 8.261l-.918-.881.005.005L1.427.045 0 1.414 9.987 11 20 1.39" />
            </svg>
          </span>
        </div>
        <div className={`toolbar__sort-options ${isOptionsOpened ? 'toolbar__sort-options_opened' : ''}`}>
          {Object.keys(typesOfSorting).map(keyName => (
            <SortItem
              onChange={handleChangeSorting}
              type={typesOfSorting[keyName]}
              value={keyName}
              key={keyName}
            />
          ))}
        </div>
      </div>
      {count > 0 && (
        <button type="button" className="toolbar__reset-btn" onClick={onReset}>
          {`Восстановить удаленные${count > 0 ? ` (${count})` : ''}`}
          <span className="toolbar__reset-icon" />
        </button>
      )}

    </div>
  );
};

export default ToolBar;
