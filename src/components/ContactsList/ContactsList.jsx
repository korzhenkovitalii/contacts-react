import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

import css from './ContactsList.module.css';

export const ContactsList = ({ contacts }) => {
  return (
    <div className={css.contacts}>
      {contacts
        .sort(function (a, b) {
          let nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
        .map((el, index) => (
          <ContactsListItem el={el.name} key={index} />
        ))}
    </div>
  );
};
