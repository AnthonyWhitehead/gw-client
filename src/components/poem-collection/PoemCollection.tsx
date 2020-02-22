import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPoems } from '../../store/actions';
import { setLoading } from '../../store/actions/status';

import Poem from '../poem/Poem'; 

const PoemCollection: React.FC = () => {
  const { cat, title } = useParams();

  const dispatch = useDispatch();
  const poemCollection = useSelector((state: any) => state.poems);
  const loading = useSelector((state: any) => state.loading);

  const url = cat !== undefined ? `poems/category/${cat}` : `poems/title/${title}`;

  useEffect(() => {
    dispatch(setLoading());
    fetch(`/${url}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        dispatch(setPoems(res));
      })
      .then(() => dispatch(setLoading()))
      .catch(e => {
        console.log(e);
      });
  }, [dispatch, url]);

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
