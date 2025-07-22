import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SidebarImage from '../components/SidebarImage';
import MatchForm from '../components/MatchForm';
import '../App.css';

const API_URL = process.env.REACT_APP_API_URL + '/api/match';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleMatch = async (formData) => {
    setLoading(true);
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    setLoading(false);
    navigate('/results', { state: { matches: data.matches } });
  };

  return (
    <>
      <Navbar />
      <div className="main-bg">
        <div className="container">
          <SidebarImage />
          <div className="right-form">
            <h2>Find Your Perfect Talent</h2>
            <MatchForm onSubmit={handleMatch} loading={loading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage; 