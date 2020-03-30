import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Poem from '../poem/Poem';
import { IPoem } from '../poem/interfaces';
import { setLoading } from '../../store/actions/status';

const SinglePoem: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading);
  const routeUri = '/poems/title/';

  let poemRef = useRef();
  let poem = poemRef.current;
  let { title } = useParams();

  useEffect(() => {
    dispatch(setLoading());
    fetch(routeUri + title)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        poemRef.current = res[0];
      })
      .then(() => dispatch(setLoading()))
      .catch(e => {
        console.log(e);
      });
  }, [dispatch, title]);

  return <div>{!loading && poem ? <Poem poem={poem}></Poem> : ''}</div>;
};

export default SinglePoem;
