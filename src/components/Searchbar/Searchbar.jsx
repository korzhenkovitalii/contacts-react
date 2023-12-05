import { PiMicrophoneThin } from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';

import css from './Searchbar.module.css';
import CSS from '../App.module.css';

export const Searchbar = ({ setFilteredContacts, contacts, toggleModal }) => {
  const filterContacts = e => {
    const inputValue = e.target.value;

    const filteredContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(inputValue)
    );
    setFilteredContacts(filteredContacts);
  };

  return (
    <div className={css.searchbar}>
      <div className={CSS.header}>
        <button type="button" className={CSS.button}>
          Groups
        </button>
        <span>Contacts</span>
        <button
          type="button"
          className={CSS.button}
          onClick={() => toggleModal()}
        >
          <FaPlus />
        </button>
      </div>

      <div className={css.input__container}>
        <IoIosSearch className={css.icon__search} />
        <input
          type="text"
          placeholder="Search"
          className={css.searchbar__input}
          onChange={filterContacts}
        />
        <PiMicrophoneThin className={css.icon__microphone} />
      </div>
    </div>
  );
};
