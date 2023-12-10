import { IoMdContact } from 'react-icons/io';
import { useState } from 'react';

import css from './Modal.module.css';

export const Modal = ({
  toggleModal,
  contacts,
  setContacts,
  selectedContact,
  toOpenModalChangeInfo,
  setToOpenModalChangeInfo,
}) => {
  const startInputs = toOpenModalChangeInfo
    ? selectedContact
    : { name: '', number: '', email: '', address: '', notes: '' };

  const [form, setForm] = useState(startInputs);

  const handelChangeInput = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const createUser = e => {
    if (!form.name || !form.number) {
      return alert('Введите поля имя и номер');
    }

    const duplicateUser = contacts.find(el => el.name === form.name);
    if (duplicateUser) {
      return alert('Пользователь с таким именем уже существует');
    }

    setContacts(prev => [...prev, form]);
    toggleModal();
    setToOpenModalChangeInfo(false);
  };

  const deleteUser = () => {
    setContacts(contacts.filter(el => el.name !== form.name));
    toggleModal();
    setToOpenModalChangeInfo(false);
  };

  return (
    <div className={css.modal__backdrop}>
      <div className={css.modal__container}>
        <div className={css.modal__header}>
          <button
            type="button"
            className={css.button}
            onClick={() => {
              toggleModal();
              setToOpenModalChangeInfo(false);
            }}
          >
            Back
          </button>
          <button
            type="submit"
            className={css.button}
            form="form"
            onClick={createUser}
          >
            Save
          </button>
        </div>
        <form
          id="form"
          className={css.contactInfo}
          onSubmit={handelChangeInput}
        >
          <IoMdContact size={110} className={css.contactImg} />

          <input
            onChange={handelChangeInput}
            type="text"
            id="name"
            name="name"
            value={form.name}
            required
            placeholder="Name"
            minLength="1"
            style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
          />
          <input
            onChange={handelChangeInput}
            type="tel"
            id="phone"
            name="number"
            value={form.number}
            required
            placeholder="Phone"
          />
          <input
            onChange={handelChangeInput}
            type="email"
            id="email"
            name="email"
            value={form.email}
            required
            placeholder="Email"
            style={{
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
              marginBottom: '20px',
            }}
          />

          <input
            onChange={handelChangeInput}
            type="text"
            id="address"
            name="address"
            value={form.address}
            required
            placeholder="Address"
            minLength="4"
            style={{
              borderRadius: '5px',
              marginBottom: '20px',
            }}
          />

          <textarea
            onChange={handelChangeInput}
            id="notes"
            name="notes"
            value={form.notes}
            rows="5"
            cols="33"
            placeholder="Notes"
          ></textarea>
        </form>
        {toOpenModalChangeInfo && (
          <button type="button" className={css.button} onClick={deleteUser}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
