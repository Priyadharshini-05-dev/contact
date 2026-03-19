import React from 'react';
import { useContact } from '../Context/ContactContext'; 
const ContactCard = ({ contact }) => {
  const { handleDelete } = useContact();

  return (
    <div className="card">
      <div className="info">
        <span className="name">{contact.name}</span>
        <span className="detail">{contact.phone}</span>
        <span className="detail">{contact.email}</span>
      </div>
      <button className="del" onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default ContactCard;