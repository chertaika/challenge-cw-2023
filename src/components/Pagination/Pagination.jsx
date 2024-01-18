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
        <div className={`pagination__item ${currentPage === 1 ? 'pagination__item_disabled' : ''}`} onClick={onPrevious}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="-4.5 0 20 20">
            <path d="M9.61 20 11 18.594 2.739 9.987l.881-.918-.005.005 7.34-7.647L9.586 0 0 9.987 9.61 20" />
          </svg>
        </div>
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
        <div className={`pagination__item ${currentPage === lastPage ? 'pagination__item_disabled' : ''}`} onClick={onNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="-4.5 0 20 20">
            <path d="M1.39 0 0 1.406l8.261 8.607-.881.918.005-.005-7.34 7.647L1.414 20 11 10.013 1.39 0" />
          </svg>

        </div>
      </li>
    </ul>
  );
};

export default Pagination;
