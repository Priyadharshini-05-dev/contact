import React from 'react';
import { useContact } from '../Context/ContactContext.js';
import ContactCard from './ContactCard.jsx';

const ContactList = () => {
  const { contacts } = useContact();

  if (contacts.length === 0) {
    return <p className="empty">No contacts yet. Add one above.</p>;
  }

  return (
    <div className="list">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;