import { FiMessageCircle } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { FaVideo } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import css from './ContactInfo.module.css';
import CSS from '../App.module.css';

export const ContactInfo = ({
  selectedContact,
  toggleModal,
  setToOpenModalChangeInfo,
}) => {
  const contactInfoButtons = [
    {
      name: 'message',
      img: <FiMessageCircle size={20} />,
    },
    {
      name: 'call',
      img: <IoCallOutline size={20} />,
    },
    {
      name: 'facetime',
      img: <FaVideo size={20} />,
    },
    {
      name: 'mail',
      img: <IoIosMail size={20} />,
    },
  ];

  const {
    name = 'No name',
    number = 'No number',
    email = 'No email',
    notes = '',
  } = selectedContact;

  return (
    <>
      <div className={css.contactInfo__container}>
        <div className={CSS.header}>
          <span>Contact info</span>
          <button
            type="button"
            className={CSS.button}
            onClick={() => {
              toggleModal();
              setToOpenModalChangeInfo(true);
            }}
          >
            Change
          </button>
        </div>
        <div className={css.contactInfo}>
          <img src="" alt="A" className={css.contactImg} />
          <span className={css.contactName}>{name}</span>
          <div className={css.buttons}>
            {contactInfoButtons.map((el, index) => (
              <div className={css.contactInfo__btn} key={index}>
                {el.img}
                {el.name}
              </div>
            ))}
          </div>

          <div className={css.contactList}>
            <div className={css.contactItem}>
              <span className={css.phoneName}>mobile</span>
              <a className={css.phoneLink} href={number}>
                {number}
              </a>
            </div>
            <div className={css.contactItem}>
              <span className={css.phoneName}>email</span>
              <a className={css.phoneLink} href={email}>
                {email}
              </a>
            </div>
          </div>

          <div
            className={css.contactList}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '90px',
            }}
          >
            <div className={css.contactItem}>
              <span className={css.phoneName}>home</span>
              <a className={css.phoneLink} href="tel:+380961111111">
                address from Google
              </a>
            </div>
            <div
              className={css.address}
              style={{
                width: '91px',
                height: '91px',
                borderRadius: '5px',
                backgroundColor: 'blue',
              }}
            ></div>
          </div>
        </div>

        <div className={css.contactList}>
          <div className={css.contactItem}>
            <span className={css.phoneName}>Notes:</span>
            <div className={css.phoneLink}>{notes}</div>
          </div>
        </div>
      </div>
    </>
  );
};
