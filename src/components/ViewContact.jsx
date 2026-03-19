import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewContact.css';
import { useNavigate, useParams } from 'react-router-dom';

const ViewContact = () => {

  const { id } = useParams();
  const nav = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/contacts/${id}`);
        setContact(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContact();
  }, [id]);

  if (!contact) return <p className="loading">Loading...</p>;

  return (
    <div className="view-container">

      <div className="view-card">

        <div className="view-avatar">
          {contact.name.charAt(0).toUpperCase()}
        </div>

        <h2>{contact.name}</h2>
        <span className="view-category">{contact.category}</span>

        <div className="view-details">

          <div className="view-row">
            <span className="view-label">Phone</span>
            <span className="view-value">{contact.phone}</span>
          </div>

          <div className="view-row">
            <span className="view-label">Email</span>
            <span className="view-value">{contact.email}</span>
          </div>

          <div className="view-row">
            <span className="view-label">Address</span>
            <span className="view-value">{contact.address}</span>
          </div>

          <div className="view-row">
            <span className="view-label">Category</span>
            <span className="view-value">{contact.category}</span>
          </div>

        </div>

        <div className="view-actions">
          <button className="back-btn" onClick={() => nav('/contact/table')}>
            Back
          </button>
          <button className="edit-btn" onClick={() => nav(`/contact/edit/${id}`)}>
            Edit
          </button>
        </div>

      </div>

    </div>
  );
};

export default ViewContact;