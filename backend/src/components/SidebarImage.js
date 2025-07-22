import React from 'react';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';

const SidebarImage = ({ src = DEFAULT_IMAGE, alt = 'Creative' }) => (
  <div className="left-img">
    <img src={src} alt={alt} />
  </div>
);

export default SidebarImage; 