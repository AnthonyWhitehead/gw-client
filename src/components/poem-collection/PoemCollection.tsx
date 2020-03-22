import React from 'react';
import Poem from '../poem/Poem'; 
import { useSelector } from 'react-redux';

const PoemCollection: React.FC = () => {

  const poemCollection = useSelector((state: any) => state.poems);
  const loading = useSelector((state: any) => state.loading);

  let poems;

  if (!loading && Object.entries(poemCollection).length > 0) {
    const mappedPoems = poemCollection.map((poem: any) => {
      return <Poem key={poem._id} poem={poem} />;
    });
    poems = mappedPoems;
  }

  return <div>{poems}</div>;
};

export default PoemCollection;
