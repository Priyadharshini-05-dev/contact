import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactFrom';
import ContactTable from './components/ContactTable';
import ViewContact from './components/ViewContact';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/edit/:id" element={<ContactForm />} />
          <Route path="/table" element={<ContactTable />} />
          <Route path="/view/:id" element={<ViewContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
