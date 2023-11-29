import css from "./ContactsListItem.module.css"

export const ContactsListItem = ({ el }) => {
  return <li className={css.contacts__item}>{el}</li>;
};
