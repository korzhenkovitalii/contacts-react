import { PiMicrophoneThin } from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';

import css from './Searchbar.module.css';

export const Searchbar = () => {
  return (
    <div className={css.searchbar}>
      <div className={css.searchbar__nav}>
        <button type="button" className={css.button}>
          Groups
        </button>
        <span>Contacts</span>
        <button type="button" className={css.button}>
          <FaPlus />
        </button>
      </div>

      <div className={css.input__container}>
        <IoIosSearch className={css.icon__search} />
        <input
          type="text"
          placeholder="Search"
          className={css.searchbar__input}
        />
        <PiMicrophoneThin className={css.icon__microphone} />
      </div>
    </div>
  );
};
