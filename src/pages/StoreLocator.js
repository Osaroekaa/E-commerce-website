import './StoreLocator.css';
import { useState } from 'react';

/*
  The new StoreLocator component below replaces the previous implementation.
  To integrate, remove the old StoreLocator function and its export,
  then use the following updated code.
*/
/*
  The new StoreLocator component below replaces the previous implementation.
  To integrate, remove the old StoreLocator function and its export,
  then use the following updated code.
*/


function StoreLocator() {
  const branches = [
    {
      name: 'Agip Road Rumueme',
      address: '12 Agip Road, Port Harcourt',
      map: 'https://www.google.com/maps?q=12+Agip+Road+Port+Harcourt&output=embed'
    },
    {
      name: 'Trans Amadi Industrial Layout',
      address: '22 Trans Amadi Layout, Port Harcourt',
      map: 'https://www.google.com/maps?q=22+Trans+Amadi+Layout+Port+Harcourt&output=embed'
    },
    {
      name: 'Old GRA',
      address: '35 Old GRA, Port Harcourt',
      map: 'https://www.google.com/maps?q=35+Old+GRA+Port+Harcourt&output=embed'
    },
  ];

  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <div className="store-locator-page">
      <h2>Find a Store</h2>
      <select
        value={selectedBranch.name}
        onChange={(e) => {
          const branch = branches.find(b => b.name === e.target.value);
          setSelectedBranch(branch);
        }}
      >
        {branches.map(branch => (
          <option key={branch.name}>{branch.name}</option>
        ))}
      </select>

      <div className="map-container">
        <iframe
          title="Market Square Location"
          src={selectedBranch.map}
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="branch-info">
        <h3>{selectedBranch.name}</h3>
        <p>{selectedBranch.address}</p>
      </div>
    </div>
  );
}

export default StoreLocator;