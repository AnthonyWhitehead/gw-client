import React from 'react';
import { poemTitle } from '../../utilities/utilities';
import { Link } from 'react-router-dom';

interface IPoemLink {
  title: string;
  cat: string;
}

const PoemLink: React.FC<IPoemLink> = props => {
  const link = `/category/${props.cat}/${props.title}`;
  const title = poemTitle(props.title);

  return (
    <li>
      <Link key={props.title} to={link}>
        {title}
      </Link>
    </li>
  );
};

export default PoemLink;
