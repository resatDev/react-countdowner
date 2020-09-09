import React, { useState } from 'react';
import KronometerConteiner from '../Kronometer';

const SITES = {
  kronometer: KronometerConteiner
};

const SiteMap = () => {
  const [pageID, setPageID] = useState(0);

  // initially set for kronometer
  const activePageID = pageID || 'kronometer';

  const ActiveScreen = SITES[activePageID];

  return (
    <ActiveScreen
      onActivePage={ (pageID) => setPageID(pageID) }
    />
  );
};

export default SiteMap;