import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedCat } from '../../store/actions/cat';
import { setLoading } from '../../store/actions/status';
import { icons } from './icons';

const SideBar: React.FC = () => {
  const dispatch = useDispatch();

  const linkUrl = '/poems/category-links';
  const baseLinks = useRef([]);

  const handleCategorySelection = (cat: string) => {
    dispatch(setSelectedCat(cat));
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
      .catch(e => {
        console.log(e);
      });
  });

  const mappedLinks = () => {
    return baseLinks.current.map(link => {
      return (
        <li>
          <Link key={link} to={`/category/${link}`} onClick={() => handleCategorySelection(link)}>
            <i className={icons[link]}></i>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="side-bar-container">
      <div className="side-bar-grid-container">
        <ul>{mappedLinks()}</ul>
      </div>
    </div>
  );
};

export default SideBar;
