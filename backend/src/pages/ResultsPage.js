import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MatchResults from '../components/MatchResults';
import '../App.css';

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = location.state?.matches || [];

  return (
    <>
      <Navbar />
      <div className="main-bg">
        <button className="arrow-btn left-arrow-btn" onClick={() => navigate('/')} title="Back to Home">
          <span style={{fontSize: '2rem', color: '#430b8a'}}>&#8592;</span>
        </button>
        <div className="results-below results-page">
          <MatchResults matches={matches} />
        </div>
      </div>
    </>
  );
};

export default ResultsPage; 