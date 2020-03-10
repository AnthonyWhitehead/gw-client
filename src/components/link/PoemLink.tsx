import React from 'react';
import { poemTitle } from '../../utilities/utilities';

interface IPoemLink {
  title: string;
}

const PoemLink: React.FC<IPoemLink> = props => {
  const linkHref = `#${props.title}`;
  const title = poemTitle(props.title) 

  return (
    <li key={props.title}>
      <a href={linkHref}>{title}</a>
    </li>
  );
};

export default PoemLink;
