import React from 'react';
import { useSelector } from 'react-redux';

import PoemLink from '../link/PoemLink';

const SideBarDetail: React.FC = () => {
  const poemCollection = useSelector((state: any) => state.poems);

  let links;
  let category;

  if (Object.entries(poemCollection).length > 0) {
   const cat = poemCollection[0].category;
    category = cat.charAt(0).toUpperCase() + cat.substring(1);
    links = poemCollection.map((poem: any) => {
      return <PoemLink title={poem.title} />;
    });
  }

  return (
    <div className="side-bar-detail-container open">
      <div className="side-bar-detail-grid-container">
        <h2>{category} poetry </h2>
        <ul>{links}</ul>
      </div>
    </div>
  );
};

export default SideBarDetail;
