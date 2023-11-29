import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

import css from './ContactsList.module.css';

const contacts = [
  'Adam Ericson',
  'Alejantjo Brock',
  'Gibson Alexis',
  'Billy Harper',
  'flatcher Breke',
  '12qw1',
  '3222',
  'Zqdsad',
];

export const ContactsList = () => {
  return (
    <div className={css.contacts}>
      {contacts
        .sort(function (a, b) {
          let nameA = a.toLowerCase(),
            nameB = b.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
        .map((el, index) => (
          <ContactsListItem el={el} key={index} />
        ))}
    </div>
  );
};
