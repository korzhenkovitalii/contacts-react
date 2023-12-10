import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, renderContactInfo }) => {
  return (
    <div className={css.contacts}>
      {contacts.map((el, index) => (
        <ContactsListItem
          renderContactInfo={renderContactInfo}
          el={el.name}
          key={index}
        />
      ))}
    </div>
  );
};
