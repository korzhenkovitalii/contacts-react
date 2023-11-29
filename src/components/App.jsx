import { Searchbar } from './Searchbar/Searchbar';

import css from './App.module.css';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <div className={css.app}>
      <Searchbar />
      <ContactsList />
    </div>
  );
};
