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
          <span className="view-switcher__icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M0 0h7v7h-7v-7z" />
              <path d="M9 0h7v7h-7v-7z" />
              <path d="M0 9h7v7h-7v-7z" />
              <path d="M9 9h7v7h-7v-7z" />
            </svg>
          </span>
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
          <span className="view-switcher__icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z" />
            </svg>
          </span>
        </label>
      </li>
    </ul>
  );
};

export default ViewSwitcher;
