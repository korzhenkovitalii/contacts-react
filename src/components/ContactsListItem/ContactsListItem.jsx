import css from './ContactsListItem.module.css';

export const ContactsListItem = ({ el, renderContactInfo }) => {
  return (
    <li className={css.contacts__item} onClick={(e) => renderContactInfo(e)}>
      {el}
    </li>
  );
};
