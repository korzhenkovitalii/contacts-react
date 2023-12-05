import { IoMdContact } from 'react-icons/io';

import css from './Modal.module.css';

export const Modal = ({ toggleModal }) => {
  return (
    <div className={css.modal__backdrop}>
      <div className={css.modal__container}>
        <div className={css.modal__header} onClick={() => toggleModal()}>
          <button type="button" className={css.button}>
            Back
          </button>
          <button type="submit" className={css.button}>
            Save
          </button>
        </div>
        <form className={css.contactInfo}>
          <IoMdContact size={110} className={css.contactImg} />

          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            minLength="1"
            style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            placeholder="Phone"
          />
          <input
            type="email"
            id="email"
            pattern=".+@example\.com"
            required
            placeholder="Email"
            style={{
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
              marginBottom: '20px',
            }}
          />

          <input
            type="text"
            id="address"
            required
            placeholder="Address"
            minLength="4"
            style={{
              borderRadius: '5px',
              marginBottom: '20px',
            }}
          />

          <textarea
            id="notes"
            name="notes"
            rows="5"
            cols="33"
            placeholder="Notes"
          ></textarea>
        </form>
      </div>
    </div>
  );
};
