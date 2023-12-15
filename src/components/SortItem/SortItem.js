import './SortItem.scss';

const SortItem = ({ onChange, value, type }) => (
  <label className="sort-item">
    <input name="sort" type="radio" value={value} onChange={onChange} />
    <span>{type}</span>
  </label>
);

export default SortItem;
