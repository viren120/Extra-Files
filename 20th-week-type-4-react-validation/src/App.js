import './App.css';
import React, { useState } from 'react';
import Table from './components/Table';
import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Table buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} />
          }
        />
        {/* <Route
          path='/form'
          element={
            <Form buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} />
          }
        /> */}
      </Routes>
    </Router>
  );
}
