import React, { useState } from 'react';

// Backend API is on port 5005
const initialForm = {
  title: '',
  description: '',
  location: '',
  budget: '',
  stylePrefs: '',
  category: '',
  startDate: '',
  endDate: ''
};

const MatchForm = ({ onSubmit, loading }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      ...form,
      budget: Number(form.budget),
      stylePrefs: form.stylePrefs.split(',').map(s => s.trim()).filter(Boolean)
    };
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Project Title" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Describe your project" value={form.description} onChange={handleChange} required />
      <input name="location" placeholder="Location (e.g. Goa)" value={form.location} onChange={handleChange} required />
      <input name="budget" type="number" placeholder="Budget (e.g. 75000)" value={form.budget} onChange={handleChange} required />
      <input name="stylePrefs" placeholder="Style Preferences (comma separated)" value={form.stylePrefs} onChange={handleChange} required />
      <input name="category" placeholder="Category (e.g. fashion)" value={form.category} onChange={handleChange} required />
      <input name="startDate" type="date" placeholder="Start Date" value={form.startDate} onChange={handleChange} required />
      <input name="endDate" type="date" placeholder="End Date" value={form.endDate} onChange={handleChange} required />
      <button type="submit" disabled={loading}>{loading ? 'Matching...' : 'Find Talent'}</button>
    </form>
  );
};

export default MatchForm; 