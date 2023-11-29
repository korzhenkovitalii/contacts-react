import css from './Searchbar.module.css';

export const Searchbar = () => {
  return (
    <div className={css.searchbar}>
      <div className={css.searchbar__header}>
        <span>Contacts</span>
        <button type="button" className={css.button__add}>
          +
        </button>
      </div>
      <label htmlFor="" className={css.searchbar__label}>
        <input
          type="text"
          placeholder="Search"
          className={css.searchbar__input}
        />
      </label>
    </div>
  );
};
