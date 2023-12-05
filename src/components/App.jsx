import { useState } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ContactsList } from './ContactsList/ContactsList';
import css from './App.module.css';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { Modal } from './Modal/Modal';

export const App = () => {
  //States
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Ilona Korzhenko', number: '227-91-26' },
    { id: 'id-6', name: 'Vitalii Korzhenko', number: '227-91-26' },
    { id: 'id-7', name: 'David Olivera', number: '227-91-26' },
    { id: 'id-8', name: 'Macle Scofild', number: '227-91-26' },
    { id: 'id-9', name: 'Artem genov', number: '227-91-26' },
    { id: 'id-10', name: 'Sveta Panarina', number: '227-91-26' },
  ]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  console.log(filteredContacts);
  return (
    <>
      <div className={css.app}>
        <div className={css.nav}>
          <Searchbar
            toggleModal={toggleModal}
            setFilteredContacts={setFilteredContacts}
            contacts={contacts}
          />
          {filteredContacts.length > 0 ? (
            <ContactsList contacts={filteredContacts} />
          ) : (
            <ContactsList contacts={contacts} />
          )}
        </div>
        <ContactInfo />
      </div>
      {isOpenModal && <Modal toggleModal={toggleModal} />}
    </>
  );
};
