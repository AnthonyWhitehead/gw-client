import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCat } from '../../store/actions/cat';
import { setLoading } from '../../store/actions/status';
import { icons } from './icons';
import { setPoems } from '../../store/actions';

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading);

  const linkUrl = '/poems/category-links';
  const baseLinks = useRef([]);
  const url = 'poems/category/';

  const handleCategorySelection = (cat: string) => {
    dispatch(setSelectedCat(cat));
    dispatch(setLoading());
    fetch(`/${url}${cat}`)
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
  };

  useEffect(() => {
    dispatch(setLoading());
    fetch(linkUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        baseLinks.current = res;
      })
      .then(() => dispatch(setLoading()))
      .catch(e => {
        console.log(e);
      });
  }, [dispatch, linkUrl]);

  const mappedLinks = () => {
    return baseLinks.current.map(link => {
      return (
        <li key={link}>
          <Link to={`/category/${link}`} onClick={() => handleCategorySelection(link)}>
            <i className={icons[link]}></i>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="side-bar-container">
      <div className="side-bar-grid-container">
        <ul>{!loading && mappedLinks()}</ul>
      </div>
    </div>
  );
};

export default SideBar;
