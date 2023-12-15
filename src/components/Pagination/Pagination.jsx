import usePagination from '../../hooks/usePagination';
import { ELLIPSIS } from '../../utils/constants';
import './Pagination.scss';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const getId = index => index / Math.random();

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className="pagination"
    >
      <li>
        <div className={`pagination__item pagination__item_type_arrow-left ${currentPage === 1 ? 'pagination__item_disabled' : ''}`} onClick={onPrevious} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === ELLIPSIS) {
          return (
            <li key={getId(index)}>
              <div className="pagination__item pagination__item_type_ellipsis">{ELLIPSIS}</div>
            </li>
          );
        }
        return (
          <li key={getId(index)}>
            <div
              className={`pagination__item ${pageNumber === currentPage ? 'pagination__item_selected' : ''}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </div>
          </li>
        );
      })}
      <li>
        <div className={`pagination__item pagination__item_type_arrow-right ${currentPage === lastPage ? 'pagination__item_disabled' : ''}`} onClick={onNext} />
      </li>
    </ul>
  );
};

export default Pagination;
