import React, { useState, useEffect } from 'react';
import Kronometer from '../Kronometer';

const SITES = {
  kronometer: Kronometer
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