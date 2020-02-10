import React from 'react';

interface IPoemLink {
  title: string;
}

const PoemLink: React.FC<IPoemLink> = props => {
  const linkHref = `#${props.title}`;

  return (
    <li key={props.title}>
      <a href={linkHref}>{props.title}</a>
    </li>
  );
};

export default PoemLink;
