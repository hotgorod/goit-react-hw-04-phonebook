import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={css.inputText}
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;
