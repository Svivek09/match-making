import React from 'react';
import MatchCard from './MatchCard';

const MatchResults = ({ matches }) => (
  <div className="results results-row">
    {(!matches || matches.length === 0) && <p>No matches found.</p>}
    {matches && matches.map((m, i) => (
      <MatchCard key={i} match={m} />
    ))}
  </div>
);

export default MatchResults; 