import './TreeControl.scss';

const TreeControl = ({ isOpened, onClick, title }) => (
  <div className="tree-control" onClick={onClick}>
    <button
      className={`tree-control__btn ${isOpened ? 'tree-control__btn_active' : ''}`}
      type="button"
      aria-label="кнопка управления списком"
    />
    <h2 className="tree-control__title">{title}</h2>
  </div>
);

export default TreeControl;
