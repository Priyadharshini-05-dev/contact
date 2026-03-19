import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';
import ViewContact from './components/ViewContact';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/contact/edit/:id" element={<ContactForm />} />
          <Route path="/contact/table" element={<ContactTable />} />
          <Route path="/contact/view/:id" element={<ViewContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;