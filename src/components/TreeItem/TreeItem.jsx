import './TreeItem.scss';

const TreeItem = ({
  image,
  title,
  date,
  fileSize,
  onImageClick,
}) => (
  <div className="tree-item">
    <img className="tree-item__image" src={image} alt={title} onClick={onImageClick} />
    <p className="tree-item__prop">{`Дата: ${date}`}</p>
    <p className="tree-item__prop">{`Размер: ${fileSize}`}</p>
  </div>
);

export default TreeItem;
