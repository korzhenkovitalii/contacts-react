import { useState } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ContactsList } from './ContactsList/ContactsList';
import css from './App.module.css';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { Modal } from './Modal/Modal';

const data = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '459-12-56',
    email: 'uasgdua@mail.com',
    notes: 'JASdiahsfhashfaisuhfaisjof',
  },
  {
    id: 'id-2',
    name: 'Hermione Kline',
    number: '443-89-12',
    email: '12asd@mail.com',
    notes: 'Привет',
  },
  {
    id: 'id-3',
    name: 'Eden Clements',
    number: '645-17-79',
    email: 'oowq1i2@mail.com',
    notes: 'How are you',
  },
  {
    id: 'id-4',
    name: 'Annie Copeland',
    number: '227-91-26',
    email: 'yywjGHcuz@mail.com',
    notes: 'What is up',
  },
  {
    id: 'id-5',
    name: 'Ilona Korzhenko',
    number: '227-91-26',
    email: 'mjjyqw12@mail.com',
    notes: 'Piu piu',
  },
  {
    id: 'id-6',
    name: 'Vitalii Korzhenko',
    number: '227-91-26',
    email: 'YcHiahs@mail.com',
    notes: 'Ho ho ho',
  },
  {
    id: 'id-7',
    name: 'David Olivera',
    number: '227-91-26',
    email: 'casew@mail.com',
    notes: 'Piu piu',
  },
  {
    id: 'id-8',
    name: 'Macle Scofild',
    number: '227-91-26',
    email: 'ivat@mail.com',
  },
  {
    id: 'id-9',
    name: 'Artem genov',
    number: '227-91-26',
    email: 'Hello@mail.com',
    notes: 'JGHIUAGIgOICaishjd',
  },
  {
    id: 'id-10',
    name: 'Sveta Panarina',
    number: '227-91-26',
    notes: 'Coasieuaosfasfa',
  },
];

export const App = () => {
  const contactsData = data.sort(function (a, b) {
    let nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  //States
  const [contacts, setContacts] = useState(contactsData);
  const [filteredContacts, setFilteredContacts] = useState(null);

  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const [toOpenModalChangeInfo, setToOpenModalChangeInfo] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = e => {
    setIsOpenModal(!isOpenModal);
  };

  const renderContactInfo = e => {
    const currentContact = contacts.find(
      el => el.name === e.target.textContent
    );
    setSelectedContact(currentContact);
  };
  return (
    <>
      <div className={css.app}>
        <div className={css.nav}>
          <Searchbar
            toggleModal={toggleModal}
            setFilteredContacts={setFilteredContacts}
            contacts={contacts}
          />
          {filteredContacts ? (
            <ContactsList
              renderContactInfo={renderContactInfo}
              contacts={filteredContacts}
            />
          ) : (
            <ContactsList
              renderContactInfo={renderContactInfo}
              contacts={contacts}
            />
          )}
        </div>
        <ContactInfo
          selectedContact={selectedContact}
          toggleModal={toggleModal}
          setToOpenModalChangeInfo={setToOpenModalChangeInfo}
        />
      </div>
      {isOpenModal && (
        <Modal
          toggleModal={toggleModal}
          contacts={contacts}
          setContacts={setContacts}
          selectedContact={selectedContact}
          toOpenModalChangeInfo={toOpenModalChangeInfo}
          setToOpenModalChangeInfo={setToOpenModalChangeInfo}
        />
      )}
    </>
  );
};
