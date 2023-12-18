import './ViewSwitcher.scss';
import { CARDS_TYPE, TREE_TYPE } from '../../utils/constants';

const ViewSwitcher = ({ onChange, activeRadio }) => {
  const handleChangeType = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <ul className="view-switcher">
      <li>
        <label className="view-switcher__field">
          <input
            className="view-switcher__radio"
            type="radio"
            name="view-switcher"
            value={CARDS_TYPE}
            checked={activeRadio === CARDS_TYPE}
            onChange={handleChangeType}
          />
          <span className="view-switcher__icon view-switcher__icon_type_cards" />
        </label>
      </li>
      <li>
        <label className="view-switcher__field">
          <input
            className="view-switcher__radio"
            type="radio"
            name="view-switcher"
            value={TREE_TYPE}
            checked={activeRadio === TREE_TYPE}
            onChange={handleChangeType}
          />
          <span className="view-switcher__icon view-switcher__icon_type_tree" />
        </label>
      </li>
    </ul>
  );
};

export default ViewSwitcher;
