import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'contact 1',
        email: 'contact1@gmail.com',
        phone: '111-222-333-444',
        type: 'personal'
      },
      {
        id: 2,
        name: 'contact 2',
        email: 'contact2@gmail.com',
        phone: '111-222-333-444',
        type: 'professional'
      },
      {
        id: 3,
        name: 'contact 3',
        email: 'contact3@gmail.com',
        phone: '111-222-333-444',
        type: 'personal'
      },
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = Math.random();
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;