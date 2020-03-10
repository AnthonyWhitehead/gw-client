import React from 'react';
import { poemTitle } from '../../utilities/utilities';

export interface IPoem {
  poem: {
    title: string;
    category: string;
    body: string;
  };
}

const Poem: React.FunctionComponent<IPoem> = props => {
  
  const title = poemTitle(props.poem.title);

  return (
    <div className="poem-container" id={props.poem.title}>
      <img src="/img/caddis-fly-larvae.png" alt=""/>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.poem.body }}></div>
    </div>
  );
};

export default Poem;
