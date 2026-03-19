import React, { useEffect, useState } from 'react';
import './ContactForm.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ContactForm = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    category: ''
  });

  useEffect(() => {
    if (id) {
      const fetchContact = async () => {
        try {
          const res = await axios.get(`http://localhost:8080/contacts/${id}`);
          setData(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchContact();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:8080/contacts/${id}`, data);
      } else {
        await axios.post('http://localhost:8080/contacts', data);
      }
      navigate('/contact/table');
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="form-container">

      <h1>{id ? 'Edit Contact' : 'Contact Form'}</h1>

      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Category</label>
          <select
            name="category"
            value={data.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="friend">Friend</option>
            <option value="family">Family</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={data.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit">
          {id ? 'Update Contact' : 'Submit'}
        </button>

      </form>

      <button className="view-btn" onClick={() => navigate('/contact/table')}>
        View Contacts
      </button>

    </div>
  );
};

export default ContactForm;