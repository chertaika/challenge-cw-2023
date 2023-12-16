import './TypeSwitcher.scss';

const TypeSwitcher = ({ onChange, activeRadio }) => {
  const handleChangeType = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <ul className="type-switcher">
      <li>
        <label className="type-switcher__field">
          <input
            className="type-switcher__radio"
            type="radio"
            name="radio"
            value="card"
            checked={activeRadio === 'card'}
            onChange={handleChangeType}
          />
          <span className="type-switcher__icon type-switcher__icon_type_cards" />
        </label>
      </li>
      <li>
        <label className="type-switcher__field">
          <input
            className="type-switcher__radio"
            type="radio"
            name="radio"
            value="tree"
            checked={activeRadio === 'tree'}
            onChange={handleChangeType}
          />
          <span className="type-switcher__icon type-switcher__icon_type_tree" />
        </label>
      </li>
    </ul>
  );
};

export default TypeSwitcher;
