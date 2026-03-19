import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactTable.css';
import { useNavigate } from 'react-router-dom';

const ContactTable = () => {

  const nav = useNavigate();
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('https://contact-backend.onrender.com/contacts');
      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const remove = async (id) => {
    try {
      await axios.delete(`https://contact-backend.onrender.com/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">

      <h2>Contact Table</h2>

      <input placeholder="Search" />

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>{contact.category}</td>
              <td className="btn">
                <button
                  className="e-btn"
                  onClick={() => nav(`/contact/edit/${contact.id}`)}
                >
                  Edit
                </button>
                <button
                  className="d-btn"
                  onClick={() => remove(contact.id)}
                >
                  Delete
                </button>
                <button
                  className="v-btn"
                  onClick={() => nav(`/contact/view/${contact.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      <button className="add-btn" onClick={() => nav('/contact')}>
        Add Contact
      </button>

    </div>
  );
};

export default ContactTable;