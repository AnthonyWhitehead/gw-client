import React from 'react';
import { poemTitle } from '../../utilities/utilities';

export interface IPoem {
  poem: {
    _id: string;
    title: string;
    category: string;
    body: string;
  };
}

const Poem: React.FunctionComponent<IPoem> = props => {

  const title = poemTitle(props.poem.title);

  return (
    <div className="poem-container" id={props.poem.title}>
      <div>
        <img src={`/img/${props.poem.title}.jpg`} alt={props.poem.title} />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.poem.body }}></div>
      </div>
    </div>
  );
};

export default Poem;
