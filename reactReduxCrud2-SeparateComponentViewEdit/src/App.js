import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Table from './components/Table';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewForm from './components/viewForm';
import EditForm from './components/EditForm';

function App() {
  const [data, setData] = useState([]);

  const handleFormSubmit = (formData) => {
    setData([...data, formData]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Table data={data} />} />
        <Route path='/form' element={<Form onSubmit={handleFormSubmit} />} />
        <Route path='/viewForm/:id' element={<ViewForm />} />
        <Route path='/edit/:id' element={<EditForm />} />
      </Routes>
    </Router>
  );
}

export default App;
