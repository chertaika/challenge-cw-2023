import './TreeItem.scss';

const TreeItem = ({
  image,
  title,
  date,
  fileSize,
}) => (
  <div className="tree-item">
    <img className="tree-item__image" src={image} alt={title} />
    <p className="tree-item__prop">{`Дата: ${date}`}</p>
    <p className="tree-item__prop">{`Размер: ${fileSize}`}</p>
  </div>
);

export default TreeItem;
