import './TreeControl.scss';

const TreeControl = ({ isOpened, onClick, title }) => (
  <div className="tree-control" onClick={onClick}>
    <div
      className="tree-control__btn "
      aria-label="кнопка управления списком"
    >
      {isOpened
        ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 -12 32 32">
            <path d="M28 0H4a4 4 0 1 0 0 8h24a4 4 0 1 0 0-8" />
          </svg>
        )
        : (
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 32 32">
            <path d="M28 12h-8V4a4 4 0 1 0-8 0v8H4a4 4 0 1 0 0 8h8v8a4 4 0 1 0 8 0v-8h8a4 4 0 1 0 0-8" />
          </svg>
        )}
    </div>
    <h2 className="tree-control__title">{title}</h2>
  </div>
);

export default TreeControl;
