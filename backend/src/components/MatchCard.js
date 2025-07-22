import React from 'react';
import './MatchCard.css';

const MatchCard = ({ match }) => (
  <div className="match-card fixed-card">
    <h4>{match.talent.name} <span>Score: {match.score}</span></h4>
    <p><b>City:</b> {match.talent.city}</p>
    <p><b>Categories:</b> {match.talent.categories.join(', ')}</p>
    <p><b>Skills:</b> {match.talent.skills.join(', ')}</p>
    <p><b>Experience:</b> {match.talent.experience} years</p>
    <p><b>Budget Range:</b> ₹{match.talent.budgetRange.min} - ₹{match.talent.budgetRange.max}</p>
    <p><b>Styles:</b> {match.talent.styles.join(', ')}</p>
    <p><b>Rationale:</b> {match.rationale.join('; ')}</p>
    <a href={match.talent.portfolioLinks[0]} target="_blank" rel="noopener noreferrer">Portfolio</a>
  </div>
);

export default MatchCard; 