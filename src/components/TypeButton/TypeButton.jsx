import './TypeButton.scss';

const TypeButton = ({ onChange, isChecked }) => (
  <label
    className="type-button"
    htmlFor="checkbox"
  >
    <input
      className="type-button__checkbox"
      type="checkbox"
      id="checkbox"
      onChange={onChange}
      checked={isChecked}
    />
    <div className="type-button__slider">
      <span className="type-button__option type-button__option_type_tree" />
      <span className="type-button__option type-button__option_type_cards" />
    </div>
  </label>
);

export default TypeButton;
